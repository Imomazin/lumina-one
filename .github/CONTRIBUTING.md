# Contributing to Lumina One

Thank you for contributing to Lumina One! This document outlines our development workflow and deployment practices.

## Development Workflow

### Branch Strategy

- **main** - Production branch, auto-deploys to production
- **claude/\*** - Feature/development branches, create PR for review
- Never push directly to `main`

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b claude/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code structure
   - Add modules to `src/modules/`
   - Use core layer for shared functionality

3. **Build and test**
   ```bash
   npm run build  # Must pass
   npm run dev    # Verify locally
   ```

4. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve issue"
   git commit -m "refactor: improve code structure"
   ```

5. **Push and create PR**
   ```bash
   git push -u origin your-branch-name
   ```
   Then create PR on GitHub

### Pull Request Process

**Required before merge:**
- ✅ Build succeeds (`npm run build`)
- ✅ Preview deployment available
- ✅ No TypeScript errors
- ✅ Code review approved
- ✅ All checks passing

**PR Title Format:**
```
feat: Add Strategy module
fix: Resolve navigation bug
refactor: Extract shared components
docs: Update README
```

**PR Description Should Include:**
- What changed
- Why it changed
- How to test
- Screenshots (if UI changes)

### Preview Deployments

Every PR automatically gets a preview deployment:

1. **Wait for deployment** - Vercel/Netlify bot comments with preview URL
2. **Test thoroughly**
   - Navigate through all modules
   - Check responsive design
   - Verify dark mode
   - Test cross-module links
3. **Request review** only after preview works

### Merging

**DO NOT merge until:**
- Preview deployment verified
- Code review approved
- All CI checks pass
- No merge conflicts

**Merge Method:** Squash and merge (keeps history clean)

## Code Standards

### Module Structure

New modules must follow this pattern:

```
src/modules/{module-name}/
├── index.tsx              # Module entry point
├── {Module}Routes.tsx     # Route definitions
├── pages/                 # Page components
├── components/            # Module-specific components
├── contexts/              # Module-specific contexts (if needed)
├── lib/                   # Utilities
└── README.md              # Module documentation
```

### Naming Conventions

- **Files**: PascalCase for components (`Dashboard.tsx`), camelCase for utilities (`formatData.ts`)
- **Components**: PascalCase (`<RiskCard />`)
- **Functions**: camelCase (`getUserData()`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Import Order

```typescript
// 1. External libraries
import { useState } from 'react'
import { Link } from 'react-router-dom'

// 2. Core imports
import { Layout } from '../../core/layout'
import { jumpToRisk } from '../../core/navigation'

// 3. Module imports
import { RiskCard } from '../components/RiskCard'
import { formatRiskData } from '../lib/utils'

// 4. Types
import type { Risk } from '../types'
```

### TypeScript

- Use TypeScript for all files
- Define interfaces for props
- Avoid `any` type
- Export types from module `types/` directory

### Styling

- Use Tailwind CSS utilities
- Follow dark mode pattern: `className="bg-white dark:bg-gray-800"`
- No inline styles
- No CSS modules

## Adding a New Module

1. **Create module directory**
   ```bash
   mkdir -p src/modules/{module-name}/{pages,components}
   ```

2. **Create module files**
   - `index.tsx` - Module entry
   - `{Module}Routes.tsx` - Routes
   - `pages/{Module}Dashboard.tsx` - Main page
   - `README.md` - Documentation

3. **Register in module registry**
   ```typescript
   // src/modules/index.ts
   {
     id: 'module-name',
     label: 'Module Name',
     baseRoute: '/module-name',
     icon: ModuleIcon,
     description: 'Module description',
     enabled: true,
     component: lazy(() => import('./module-name').then(m => ({ default: m.ModuleModule }))),
   }
   ```

4. **Test integration**
   - Build succeeds
   - Module appears in sidebar
   - Routes work
   - No console errors

## Testing Checklist

Before submitting PR:

**Build**
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No linting warnings

**Navigation**
- [ ] Sidebar shows module
- [ ] Module routes work
- [ ] Cross-module links work
- [ ] Browser back/forward works

**UI**
- [ ] Dark mode works
- [ ] Responsive on mobile
- [ ] No layout shifts
- [ ] Icons load correctly

**Performance**
- [ ] Lazy loading works
- [ ] No console errors
- [ ] Fast page transitions

## Getting Help

- **Questions?** Open a GitHub discussion
- **Bug?** Open an issue with reproduction steps
- **Feature idea?** Open an issue with use case

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
