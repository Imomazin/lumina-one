# Lumina One

**Unified Intelligence Control Plane**

Lumina One is a modular platform that integrates strategy, risk, and financial intelligence into a single, cohesive system. Built on a clean module architecture, it provides a foundation for enterprise decision-making.

## Overview

Lumina One is not just an application—it's a **platform**. It hosts independent intelligence modules that share a common infrastructure while maintaining their domain expertise.

### Current Modules

- **Risk** (Operational) - Risk Intelligence & Management
- **Strategy** (Coming Soon) - Strategic Planning & Execution
- **Finance** (Coming Soon) - Financial Intelligence & Analysis

## Architecture

### Platform Layer

The platform provides shared services that all modules consume:

```
src/
├── core/                  # Platform services (layout, theme, navigation, auth)
├── modules/              # Intelligence modules
│   ├── risk/            # Risk module (operational)
│   ├── strategy/        # Strategy module (placeholder)
│   └── finance/         # Finance module (placeholder)
├── pages/               # Platform pages (Overview)
└── App.tsx              # Application root
```

### Module Registry

All modules are registered in `src/modules/index.ts`:

```typescript
{
  id: 'risk',
  label: 'Risk',
  baseRoute: '/risk',
  icon: Shield,
  description: 'Risk Intelligence & Management',
  enabled: true,
  component: lazy(() => import('./risk'))
}
```

The platform dynamically generates:
- Routes from module registry
- Sidebar navigation from module registry
- Overview page from module registry

**One source of truth. Zero duplication.**

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Theme**: Class-based dark mode (no flash)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Imomazin/lumina-one.git
cd lumina-one

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Module Structure

Each module follows this pattern:

```
src/modules/{module}/
├── index.tsx              # Module entry point
├── {Module}Routes.tsx     # Route definitions (relative paths)
├── pages/                 # Page components (no Layout wrapper)
├── components/            # Module-specific components
├── contexts/              # Module-specific contexts
├── lib/                   # Utilities and data
├── types/                 # TypeScript types
└── README.md              # Module documentation
```

### Adding a New Module

1. Create module directory structure
2. Implement module following the pattern
3. Register in `src/modules/index.ts`
4. Test integration

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed guidelines.

## Core Services

### Layout (`src/core/layout/`)

Global application shell:
- **Layout** - Main app container
- **Sidebar** - Left navigation (module registry)
- **Topbar** - Top header bar

### Theme (`src/core/theme/`)

Theme management:
- `getStoredTheme()` - Get user preference
- `applyTheme()` - Apply theme to DOM
- Dark mode loads before React (no flash)

### Navigation (`src/core/navigation/`)

Cross-module navigation:
- `jumpToRisk()` - Navigate to Risk module
- `jumpToStrategy()` - Navigate to Strategy module
- `jumpToFinance()` - Navigate to Finance module
- `getModulePath()` - Get path for any module

### Auth (`src/core/auth/`)

Authentication foundation (currently stub):
- Global auth types
- `useAuth()` hook
- Modules can extend with their own auth

## Deployment

### Preview Deployments

Every pull request gets an automatic preview deployment via Vercel:

1. Create PR
2. Wait for Vercel bot comment
3. Test preview deployment
4. Request review

### Production Deployment

Merges to `main` automatically deploy to production.

## Project Status

### v0.1.0 - Platform Foundation Complete

✅ Module registry system
✅ Core layer (layout, theme, navigation, auth stub)
✅ Risk module integrated (12 pages, full features)
✅ Strategy module (placeholder, ready for implementation)
✅ Finance module (placeholder, ready for implementation)
✅ Unified Overview page
✅ Dark mode (no flash)
✅ Responsive design
✅ TypeScript throughout
✅ Clean module boundaries

### Roadmap

**v0.2.0** - Strategy Module
- Implement full Strategy module
- Replace placeholder with real functionality

**v0.3.0** - Finance Module
- Implement full Finance module
- Replace placeholder with real functionality

**v1.0.0** - Production Ready
- All three modules operational
- Global authentication
- Advanced cross-module features
- Production hardening

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](.github/CONTRIBUTING.md) for:
- Development workflow
- Code standards
- PR process
- Module guidelines

## Documentation

- **Platform**: [src/core/README.md](src/core/README.md)
- **Risk Module**: [src/modules/risk/README.md](src/modules/risk/README.md)
- **Strategy Module**: [src/modules/strategy/README.md](src/modules/strategy/README.md)
- **Finance Module**: [src/modules/finance/README.md](src/modules/finance/README.md)

## License

[MIT License](LICENSE)

## Architecture Principles

1. **Platform owns infrastructure, modules own intelligence**
2. **Modules consume from core, never duplicate**
3. **Module registry is single source of truth**
4. **Clean separation of concerns**
5. **Scalable by design**

---

**Lumina One** - One platform, unified intelligence.
