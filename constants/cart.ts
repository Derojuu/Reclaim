import { CartItem } from '@/types/cart';

export const DEFAULT_CART_ITEMS: CartItem[] = [
  {
    id: 'reclaim-pro-license',
    name: 'Reclaim Pro for Mac',
    tagline: 'Lifetime single-user license with priority updates',
    description: 'Full disk-space inventory, live desktop companion pet, automatic storage reclaim, and usage window tracker for Claude Code and Codex.',
    price: 19.00,
    originalPrice: 29.00,
    billingPeriod: 'one-time',
    quantity: 1,
    badge: 'Popular',
    features: [
      'Unlimited Mac devices with your Apple ID',
      'All cleanup engines (Finder Trash, Archive, Cache)',
      'Desktop companion pet with audio alerts',
      'Live Claude Code & Codex quota monitors',
      'Offline-first and 100% private on your machine'
    ]
  },
  {
    id: 'reclaim-team-seat',
    name: 'Reclaim Team Pack (5 Seats)',
    tagline: 'For engineering teams running intensive AI coding loops',
    description: 'Centralized license management, team quota monitoring, and automated worktree cleanup scripts for engineering fleets.',
    price: 49.00,
    originalPrice: 79.00,
    billingPeriod: 'one-time',
    quantity: 0,
    badge: 'Teams',
    features: [
      '5 standalone Mac seats',
      'Team shared limit dashboards',
      'CI/CD and pre-commit clean hooks',
      'Direct developer support channel'
    ]
  }
];
