/**
 * Lumina One Design System
 *
 * Platform-level design tokens.
 * Modules consume these, never override.
 */

export const DESIGN_TOKENS = {
  // Layout
  layout: {
    sidebarWidth: '256px',      // 64 * 4 = 16rem
    topbarHeight: '64px',        // 16 * 4 = 4rem
    pageMaxWidth: '1440px',      // 90rem
    contentPadding: '24px',      // 6 * 4 = 1.5rem
  },

  // Typography Scale (3 levels only)
  typography: {
    // Hero text (page titles, major headings)
    hero: {
      size: '2rem',              // 32px
      weight: '700',
      lineHeight: '1.2',
    },
    // Body text (section titles, important text)
    body: {
      size: '1rem',              // 16px
      weight: '500',
      lineHeight: '1.5',
    },
    // Detail text (metadata, labels, captions)
    detail: {
      size: '0.875rem',          // 14px
      weight: '400',
      lineHeight: '1.4',
    },
  },

  // Icons
  icons: {
    small: '16px',               // 1rem - inline with text
    medium: '20px',              // 1.25rem - nav items, badges
    large: '32px',               // 2rem - hero sections
  },

  // Spacing Rhythm (use these for vertical spacing)
  spacing: {
    xs: '8px',                   // 0.5rem - tight spacing
    sm: '16px',                  // 1rem - component internal spacing
    md: '24px',                  // 1.5rem - section spacing
    lg: '32px',                  // 2rem - major section spacing
    xl: '48px',                  // 3rem - page section breaks
  },

  // Border Radius
  radius: {
    sm: '8px',                   // 0.5rem - small components
    md: '12px',                  // 0.75rem - cards, buttons
    lg: '16px',                  // 1rem - major containers
  },
} as const

export type DesignTokens = typeof DESIGN_TOKENS
