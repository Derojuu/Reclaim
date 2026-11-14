'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartContextType, CartItem } from '@/types/cart';
import { DEFAULT_CART_ITEMS } from '@/constants/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'reclaim_cart_items_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    return DEFAULT_CART_ITEMS;
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, mounted]);

  const activeItems = items.filter((item) => item.quantity > 0);
  const itemCount = activeItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = activeItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = activeItems.reduce((acc, item) => {
    const orig = item.originalPrice ? item.originalPrice : item.price;
    return acc + (orig - item.price) * item.quantity;
  }, 0);
  const total = subtotal;

  const addItem = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: 0 } : i)));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems((prev) => prev.map((i) => ({ ...i, quantity: 0 })));
  };

  return (
    <CartContext.Provider
      value={{
        items: activeItems,
        itemCount,
        subtotal,
        discount,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
