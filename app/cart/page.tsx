import React from 'react';
import { Metadata } from 'next';
import { CartSection } from '@/components/sections/CartSection';

export const metadata: Metadata = {
  title: 'Cart — Reclaim',
  description: 'Review and checkout your Reclaim for Mac license and add-ons.',
};

export default function CartPage() {
  return <CartSection />;
}
