# Risk Module (Lumina R)

This module provides Risk Intelligence & Management capabilities within Lumina One.

## Structure

```
src/modules/risk/
├── index.tsx              # Module entry point with AuthProvider
├── RiskRoutes.tsx         # Route definitions (all 12 active pages)
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   ├── ui/                # Shared UI components
│   └── ProtectedRoute.tsx # Route protection wrapper
├── contexts/
│   ├── AuthContext.tsx    # Auth context (auto-login for Lumina One)
│   └── ThemeContext.tsx   # Theme management
├── lib/
│   └── sampleData.ts      # Sample risk data
├── pages/
│   ├── Dashboard.tsx      # ✓ Active
│   ├── RiskRegister.tsx   # ✓ Active
│   ├── Alerts.tsx         # ✓ Active
│   ├── Analytics.tsx      # ✓ Active
│   ├── Reports.tsx        # ✓ Active
│   ├── AICoach.tsx        # ✓ Active
│   ├── RiskFrameworks.tsx # ✓ Active
│   ├── Team.tsx           # ✓ Active
│   ├── Settings.tsx       # ✓ Active
│   ├── Admin.tsx          # ✓ Active
│   ├── DataAnalysis.tsx   # ✓ Active
│   ├── APIGateway.tsx     # ✓ Active
│   ├── Login.tsx          # ✗ Unused (kept for reference)
│   ├── Signup.tsx         # ✗ Unused (kept for reference)
│   └── LandingPage.tsx    # ✗ Unused (kept for reference)
└── types/
    └── index.ts           # TypeScript type definitions
```

## Active Routes

All routes are relative to `/risk`:

| Route | Component | Description |
|-------|-----------|-------------|
| `/risk` | Dashboard | Main risk intelligence dashboard |
| `/risk/register` | RiskRegister | Risk catalog and management |
| `/risk/alerts` | Alerts | Risk notifications |
| `/risk/analytics` | Analytics | Risk metrics and visualizations |
| `/risk/reports` | Reports | Risk reporting |
| `/risk/ai-coach` | AICoach | AI-powered risk advisor |
| `/risk/frameworks` | RiskFrameworks | Framework management |
| `/risk/team` | Team | Team collaboration |
| `/risk/settings` | Settings | Module settings |
| `/risk/admin` | Admin | Administration panel |
| `/risk/data-analysis` | DataAnalysis | Advanced analytics |
| `/risk/api-gateway` | APIGateway | External integrations |

## Unused Files

The following files were migrated from the standalone Lumina R app but are **not used** in Lumina One:

- **Login.tsx** - Lumina One has no auth gates (AuthContext auto-logs in)
- **Signup.tsx** - Lumina One has no auth gates
- **LandingPage.tsx** - Lumina One uses a unified Overview page

These files are kept for reference but are not imported by `RiskRoutes.tsx`.

## Integration with Lumina One

### Layout
- Risk pages render **inside** Lumina One's global layout
- No separate sidebar or header from Risk module
- Pages return fragments (`<>...</>`) instead of full layouts

### Authentication
- AuthContext auto-logs in a default user
- No login/signup flow needed
- ProtectedRoute kept for future extensibility but always passes

### Theming
- Inherits Lumina One's Tailwind v4 dark mode
- Uses Lumina One's color palette
- ThemeContext kept for module-specific theme features

### Navigation
- All routes are relative (no absolute paths like `/risk/...`)
- Links within risk pages use relative navigation
- Module registered in parent `src/modules/index.ts`

## Development

### Adding a New Page
1. Create page component in `pages/`
2. Remove any `<Layout>` wrapper
3. Add route in `RiskRoutes.tsx` with relative path
4. Wrap in `<ProtectedRoute>` if needed

### Modifying Components
- Dashboard components: `components/dashboard/`
- Shared UI: `components/ui/`
- Keep components module-specific (no cross-module imports)

## Notes

- This module was migrated from: https://github.com/Imomazin/risk-coach-mvp
- All standalone app assumptions have been removed
- Module operates within Lumina One's platform architecture
