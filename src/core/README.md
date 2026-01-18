# Core Platform Layer

The `core/` directory contains shared functionality for all modules in Lumina One. Modules **consume** from core but **never own** these concerns.

## Principle

**Platform owns, modules consume.**

- ✅ Layout = Core responsibility
- ✅ Theme = Core responsibility
- ✅ Navigation = Core responsibility
- ✅ Auth foundation = Core responsibility (modules can extend)
- ❌ Business logic = Module responsibility
- ❌ Module-specific UI = Module responsibility

## Structure

```
src/core/
├── layout/           # Global layout components
│   ├── Layout.tsx    # Main app shell
│   ├── Sidebar.tsx   # Left navigation
│   ├── Topbar.tsx    # Top header bar
│   └── index.ts      # Clean exports
├── theme/            # Theme management
│   └── index.ts      # Theme utilities (getStoredTheme, applyTheme, etc.)
├── navigation/       # Cross-module navigation
│   └── index.ts      # Navigation helpers (jumpToRisk, jumpToStrategy, etc.)
├── auth/             # Auth foundation (stub)
│   └── index.ts      # Global auth types and placeholders
├── index.ts          # Barrel export for all core functionality
└── README.md         # This file
```

## Usage

### Layout

```tsx
// In App.tsx
import { Layout } from './core/layout'

function App() {
  return (
    <Layout>
      <Routes>...</Routes>
    </Layout>
  )
}
```

### Theme

```ts
// In any component
import { getStoredTheme, applyTheme } from './core/theme'

const currentTheme = getStoredTheme() // 'light' | 'dark' | 'system'
applyTheme('dark') // Apply dark mode
```

### Navigation

```tsx
// In any module
import { jumpToRisk, jumpToStrategy } from './core/navigation'

// Link to another module
<Link to={jumpToRisk('alerts')}>View Risk Alerts</Link>
<Link to={jumpToStrategy('planning')}>Open Strategy Planning</Link>

// Programmatic navigation
const riskPath = jumpToRisk('register')
navigate(riskPath)
```

### Auth (Stub)

```ts
// Currently a placeholder
// Future: Centralized auth for all modules
import { useAuth } from './core/auth'

const { user, isAuthenticated } = useAuth()
```

## Guidelines

### What Belongs in Core?

**✅ Should be in core:**
- Layout components (Sidebar, Topbar, Layout)
- Theme utilities
- Cross-module navigation helpers
- Shared types for platform-wide concerns
- Global auth stubs
- Platform-level hooks

**❌ Should stay in modules:**
- Module-specific UI components (even if similar)
- Module-specific business logic
- Module-specific contexts (unless truly shared)
- Module-specific types

### When to Add to Core

Ask these questions:
1. Will **all** modules need this?
2. Does this define **platform behavior** (not module behavior)?
3. Would duplicating this across modules be **problematic**?

If yes to all three → Core
If no to any → Keep in module

### Module Independence

Modules should:
- Import from `core/` for platform services
- Never import from other modules
- Keep their own contexts and logic isolated
- Export clean interfaces for potential cross-module communication

## Cross-Module Communication

Use navigation helpers:

```tsx
// From Risk module, link to Strategy
import { jumpToStrategy } from '../../core/navigation'

<Link to={jumpToStrategy()}>
  View in Strategy
</Link>
```

Future: Add event bus or module communication layer if needed.

## Anti-Patterns

### ❌ Don't Do This
```tsx
// Module importing from another module
import { RiskCard } from '../../modules/risk/components/ui/Card'
```

### ✅ Do This Instead
```tsx
// Module using core or own components
import { Card } from './components/ui/Card' // Own component
// OR
import { CoreCard } from '../../core/ui/Card' // If truly shared
```

## Migration from Modules

When a component becomes truly shared across all modules:

1. Move from `modules/{module}/components` to `core/{category}`
2. Update imports in all modules
3. Document in core README
4. Remove from module-specific docs

Example: If all modules need the same Card component, move it to `core/ui/Card.tsx`.

## Future Additions

Potential core additions:
- `core/ui/` - Truly shared UI components
- `core/api/` - API client configuration
- `core/analytics/` - Analytics tracking
- `core/error/` - Global error handling
- `core/logging/` - Platform-wide logging

Only add when **all modules** need it.

## Testing

Core functionality should be thoroughly tested since all modules depend on it.

```bash
npm test src/core
```

## Summary

The core layer is the **contract** between the platform (Lumina One) and its modules (Risk, Strategy, Finance). It provides the foundation while keeping modules independent and focused on their domain logic.

**Platform owns infrastructure. Modules own intelligence.**
