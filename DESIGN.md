# Design

## Design MD

OpenClaw Ops is a product UI for a three-workspace agent operations console. It should feel operational, premium and precise, not like a generic dashboard.

## Visual References

- Trading follows the Voltrex reference: pale app frame, large central trading surface, compact right risk rail, bottom market/status strip, soft rounded controls.
- Facebook Leads follows the CRM duplicate-reference spirit: darker contact workspace, a vivid yellow attention plane, contact comparison cards, fast response controls and customer preservation.
- Platform Content follows the creator calendar reference: warm studio surface, content planning calendar, left tool rail, illustrated warmth translated into operational content cards.

## Navigation

Only three main workspaces exist: Trading, Facebook Leads, Platform Content. A 3-state workspace toggle sits at the bottom. Each workspace has its own bottom menu. There is no global sidebar or System/Ops workspace.

## Color

Use OKLCH colors in implementation.

- Base neutrals are tinted, never pure black or pure white.
- Trading: fog white, cool paper, charcoal ink, mint guarded state, amber warning.
- Facebook Leads: charcoal overlay, lemon attention, contact blue, consent green, coral risk.
- Platform Content: warm cream, olive green, clay orange, soft sky tags.

## Typography

Use system UI or Inter-style sans. Fixed type scale. Large numerals are reserved for price, lead score or customer value. Labels and controls remain compact and readable.

## Layout

Major screens use large work planes, rails and bands instead of generic card grids. Cards are used for repeated records, previews and compact status items only. No nested cards.

## Components

Controls need default, hover, focus, active, disabled and loading states. High-risk buttons should look deliberate and gated. Empty, loading, not-configured, risk-blocked and resolved states are first-class.

## Motion

Use 150-220ms ease-out transitions for workspace switch, selected tab, drawer reveal and status changes only. No decorative page-load choreography.
