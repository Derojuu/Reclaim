'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart';
import { SITE_CONFIG } from '@/constants/site';
import { DEFAULT_CART_ITEMS } from '@/constants/cart';
import { formatCurrency } from '@/lib/utils';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShoppingCart01Icon,
  Delete02Icon,
  BadgeCheckIcon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

export const CartSection: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    discount,
    total,
    removeItem,
    updateQuantity,
    addItem,
    clearCart,
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GLAZE2026' || promoCode.trim().length > 2) {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
    }, 1000);
  };

  const finalTotal = promoApplied ? Math.max(0, total * 0.8) : total;

  if (checkoutComplete) {
    return (
      <section className="chapter pt-28 pb-36 min-h-[75vh] flex items-center justify-center">
        <div className="wrap max-w-xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#34c98a]/10 border border-[#34c98a]/30 flex items-center justify-center text-[#34c98a]">
            <HugeiconsIcon icon={BadgeCheckIcon} size={34} />
          </div>
          <header className="chapter-head mb-6" style={{ margin: '0 auto', textAlign: 'center', maxWidth: 640 }}>
            <p className="eyebrow mono">Order confirmed · Glaze Verified</p>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 12 }}>
                You’re all set with Reclaim.
              </h2>
              <p className="chapter-copy" style={{ fontSize: 16 }}>
                Your license key has been provisioned. Download the latest build from the
                Glaze Store or copy your offline registration certificate.
              </p>
            </div>
          </header>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/" className="button primary">
              Back to Home
            </Link>
            <a
              href={SITE_CONFIG.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="button quiet"
            >
              Open in Glaze Store ↗
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="chapter pt-24 pb-32 min-h-[80vh]">
      <div className="wrap">
        {/* Navigation Breadcrumb */}
        <div className="attribution-rail mono mb-8" aria-label="Order navigation">
          <Link href="/#top" className="hover:text-[var(--fg)] transition-colors">
            Reclaim
          </Link>
          <i />
          <span>Checkout & Licensing</span>
          <i />
          <span>macOS Direct</span>
        </div>

        {/* Chapter Header */}
        <header className="chapter-head mb-12" data-reveal="true">
          <p className="eyebrow mono">Order & Licensing</p>
          <div>
            <h2>Clear the footprint. Keep the companion.</h2>
            <p className="chapter-copy">
              One-time license for Mac. Includes all cleanup engines, live companion pet,
              and quota monitors for Claude Code and Codex.
            </p>
          </div>
        </header>

        {items.length === 0 ? (
          <div
            className="p-12 text-center rounded-[20px] border border-[var(--line)]"
            style={{ background: 'var(--panel)' }}
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[var(--raised)] border border-[var(--line)] flex items-center justify-center text-[var(--fg-3)]">
              <HugeiconsIcon icon={ShoppingCart01Icon} size={26} />
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>
              Your order is currently empty
            </h3>
            <p className="chapter-copy max-w-md mx-auto mb-8" style={{ fontSize: 15 }}>
              Choose a license below to get Reclaim for your personal Mac or engineering team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => addItem(DEFAULT_CART_ITEMS[0])}
                className="button primary"
              >
                + Add Reclaim Pro License ($19)
              </button>
              <Link href="/" className="button quiet">
                View Features & Proof
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-[20px] border border-[var(--line)] transition-all hover:border-[var(--line-strong)]"
                  style={{ background: 'var(--panel)', boxShadow: 'var(--shadow)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--raised)] border border-[var(--line)] flex items-center justify-center shrink-0">
                        <Image
                          src={SITE_CONFIG.images.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3
                            style={{
                              fontSize: 18,
                              fontWeight: 720,
                              letterSpacing: '-0.02em',
                              color: 'var(--fg)',
                            }}
                          >
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className="mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#d97757]/15 text-[#d97757] border border-[#d97757]/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--fg-2)] mt-1">
                          {item.tagline}
                        </p>
                        <p className="text-xs text-[var(--fg-3)] mt-2 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Outcome keys badge rail */}
                        {item.features && item.features.length > 0 && (
                          <div className="outcome-keys mono mt-4 flex flex-wrap gap-2" aria-label="Included features">
                            {item.features.map((feat, i) => (
                              <span key={i} style={{ fontSize: 11, padding: '4px 9px' }}>
                                <i className="text-[#34c98a] mr-1.5 not-italic">✓</i>
                                {feat}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price and Quantity Modifier */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-[var(--line)]">
                      <div className="text-right">
                        <div
                          className="mono text-xl font-bold"
                          style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}
                        >
                          {formatCurrency(item.price * item.quantity)}
                        </div>
                        {item.originalPrice && (
                          <div className="mono text-xs text-[var(--fg-4)] line-through">
                            {formatCurrency(item.originalPrice * item.quantity)}
                          </div>
                        )}
                        <span className="mono text-[10px] text-[var(--fg-3)]">
                          {item.billingPeriod}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center border border-[var(--line-strong)] rounded-full bg-[var(--ink)] px-1">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-sm text-[var(--fg-2)] hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="mono w-7 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-sm text-[var(--fg-2)] hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="icon-button"
                          style={{ width: 32, height: 32, borderRadius: '50%' }}
                          aria-label={`Remove ${item.name}`}
                          title="Remove item"
                        >
                          <HugeiconsIcon icon={Delete02Icon} size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Team Pack add-on card */}
              {!items.some((i) => i.id === 'reclaim-team-seat') && (
                <div
                  className="p-5 rounded-[18px] border border-dashed border-[var(--line-strong)] flex flex-col sm:flex-row items-center justify-between gap-4"
                  style={{ background: 'var(--raised)' }}
                >
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg)', marginBottom: 2 }}>
                      Need team seats for your engineering org?
                    </h4>
                    <p className="text-xs text-[var(--fg-3)]">
                      Add Reclaim Team Pack (5 Mac seats) with shared quota dashboards.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem(DEFAULT_CART_ITEMS[1])}
                    className="button quiet text-xs"
                    style={{ padding: '8px 16px', borderRadius: 999 }}
                  >
                    + Add Team Pack ($49)
                  </button>
                </div>
              )}
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 space-y-4">
              <div
                className="p-6 sm:p-7 rounded-[20px] border border-[var(--line)] sticky top-24"
                style={{ background: 'var(--panel)', boxShadow: 'var(--shadow)' }}
              >
                <p className="eyebrow mono">Order Summary</p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 760,
                    letterSpacing: '-0.024em',
                    marginBottom: 20,
                  }}
                >
                  Total Due
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-[var(--fg-2)]">
                    <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                    <span className="mono text-[var(--fg)]">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#34c98a]">
                      <span>Glaze Awards Promo</span>
                      <span className="mono">-{formatCurrency(discount)}</span>
                    </div>
                  )}

                  {promoApplied && (
                    <div className="flex justify-between text-[#34c98a]">
                      <span>Code GLAZE2026 (20% off)</span>
                      <span className="mono">
                        -{formatCurrency(total * 0.2)}
                      </span>
                    </div>
                  )}

                  <div
                    className="pt-4 mt-2 border-t border-[var(--line)] flex justify-between items-baseline"
                  >
                    <span style={{ fontSize: 15, fontWeight: 700 }}>Total</span>
                    <div className="text-right">
                      <div
                        className="mono text-2xl font-bold"
                        style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}
                      >
                        {formatCurrency(finalTotal)}
                      </div>
                      <p className="mono text-[10px] text-[var(--fg-4)] mt-0.5">
                        One-time · Lifetime updates
                      </p>
                    </div>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="mt-6 pt-5 border-t border-[var(--line)]">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (GLAZE2026)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="mono flex-1 bg-[var(--ink)] border border-[var(--line-strong)] rounded-lg px-3 py-2 text-xs text-[var(--fg)] placeholder:text-[var(--fg-4)] focus:outline-none focus:border-[#d97757]"
                    />
                    <button
                      type="submit"
                      className="button quiet text-xs"
                      style={{ padding: '0 14px' }}
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="mono text-[11px] text-[#34c98a] mt-2">
                      ✓ Promo discount applied successfully!
                    </p>
                  )}
                </form>

                {/* Checkout Button */}
                <button
                  type="button"
                  disabled={isCheckingOut || items.length === 0}
                  onClick={handleCheckout}
                  className="button primary w-full justify-center mt-6 py-3 font-bold flex items-center gap-2 disabled:opacity-50"
                  style={{ width: '100%' }}
                >
                  {isCheckingOut ? (
                    'Processing Order...'
                  ) : (
                    <>
                      <span>Complete Checkout</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                    </>
                  )}
                </button>

                <p className="award-note text-center mt-4" style={{ fontSize: 11 }}>
                  30-day money-back guarantee · Glaze verified build · Instant activation
                </p>

                <div className="mt-5 pt-4 border-t border-[var(--line)] text-[11px] text-[var(--fg-3)] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[#34c98a] font-bold">✓</span>
                    <span>Direct macOS binary (Apple Silicon M1/M2/M3/M4 & Intel)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#34c98a] font-bold">✓</span>
                    <span>100% offline-first · zero telemetry · zero data sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
