# Reclaim — See What Your Coding Agents Leave Behind

A modern, high-performance replication of [Reclaim](https://getreclaim.xyz/), built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Reclaim uncovers the hidden storage footprints left by AI coding agents like Claude Code and Codex, provides a live desktop companion pet, and keeps token and usage limits one click away.

---

## 🚀 Overview

Developers using autonomous coding agents frequently encounter heavy disk bloat from session transcripts, execution traces, debug logs, cache artifacts, and abandoned worktrees. Reclaim provides a single, unified interface to:
- **Visualize Local Footprint**: Identify disk space consumption across agents, projects, sessions, and types.
- **Categorize Cleanup Targets**: Intelligently classify data into Active, History, Protected, Archive, Finder Trash, and Regenerable cache.
- **Interactive Companion Pet**: Live interactive companion that tracks active agents, visually indicates state (Working, Needs You, Done, Quiet), and synthesizes Web Audio notifications.
- **Quota & Window Monitoring**: Instant visibility into 5-hour and weekly rate limits for Claude Code and Codex.
- **Full E-Commerce Cart & Licensing**: Complete checkout workflow for personal Mac licenses and team packs with coupon support and local state synchronization.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Custom Design Tokens
- **Icons**: [@hugeicons/core-free-icons](https://hugeicons.com/) & [@hugeicons/react](https://www.npmjs.com/package/@hugeicons/react)
- **Audio Engine**: Web Audio API (`AudioContext`) for native state chimes and feedback
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Project Architecture

```
Reclaim/
├── app/
│   ├── layout.tsx              # Root HTML, Google Fonts, theme init, and CartProvider
│   ├── page.tsx                # Main landing page assembling sections
│   └── cart/
│       └── page.tsx            # Full-featured Cart & licensing checkout page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation header with brand, X handle, theme toggle & cart badge
│   │   └── Footer.tsx          # Footer with Glaze Awards acknowledgement & copyright
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero kicker, headline, CTA buttons, storage symptom bar
│   │   ├── StorageSection.tsx  # Attribution rail, 04-inventory proof, and cleanup outcome matrix
│   │   ├── FounderSection.tsx  # Founder turn eyebrow and 06-work proof
│   │   ├── PetSection.tsx      # Desktop pet headline, 07-floating proof & interactive demo
│   │   ├── UsageSection.tsx    # Limit monitoring copy, data source truth note & 09-usage proof
│   │   ├── FinalSection.tsx    # Lockup lines, app logo, download CTA & Glaze Store QR code
│   │   └── CartSection.tsx     # License breakdown, quantity modifiers, promo handling & checkout
│   └── ui/
│       ├── Button.tsx          # Composable button supporting primary & quiet variants
│       ├── IconButton.tsx      # Rounded icon button wrapper
│       ├── InteractivePet.tsx  # Interactive SVG pet with Web Audio synthesizer & state animations
│       ├── ProofMedia.tsx      # Responsive proof screenshot container with captions
│       ├── ProviderDot.tsx     # Claude Code (clay) & Codex (green) provider status dots
│       ├── StorageBar.tsx      # Mac storage symptom indicator bar
│       └── ThemeToggle.tsx     # Theme toggle switching between dark and light modes
├── constants/
│   ├── cart.ts                 # Default license and team pack items
│   └── site.ts                 # Metadata, report links, image paths, and static copy
├── hooks/
│   └── use-cart.tsx            # Persistent cart state hook synchronized with localStorage
├── lib/
│   └── utils.ts                # Utility helpers (cn, formatBytes, formatCurrency)
├── types/
│   ├── cart.ts                 # Cart item and context types
│   └── index.ts                # Domain types (PetState, ProviderType, etc.)
├── styles/
│   ├── globals.css             # Tailwind v4 configuration, font variables, and theme overrides
│   └── reclaim.css             # Design tokens, layout rules, and keyframe animations
└── public/
    ├── favicon.ico             # Brand favicon
    └── images/                 # High-resolution screenshots, app icons, and QR codes
```

---

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node 24)
- pnpm 9+ or 12+

### Installation

```bash
# Clone the repository
git clone https://github.com/Derojuu/Reclaim.git
cd Reclaim

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

---

## 📄 License

MIT © [Derojuu](https://github.com/Derojuu)
