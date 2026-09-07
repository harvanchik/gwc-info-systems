# GWC Information Systems

Responsive website for GWC Information Systems, LLC, built with React, TypeScript, Vinext, and OpenAI Sites.

## Development

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
npx tsc --noEmit --incremental false
```

## Content

- `app/page.tsx`: company, Lew biography, services, and contact information
- `app/globals.css`: responsive styling
- `app/privacy/page.tsx`: website privacy notice
- `app/accessibility/page.tsx`: accessibility information
- `components/back-to-top.tsx`: scroll-dependent keyboard-accessible control

The headshot remains a placeholder. Services use client-supplied draft copy. Confirm business copy before public launch.

## Hosting

The existing private site is https://gwc-information-systems.harvanchik.chatgpt.site.
The `.openai/hosting.json` file retains its Sites project association. Pushing to GitHub alone does not publish changes to Sites. No deployment credentials are stored in this repository.

## Accessibility review

On September 7, 2026, checks passed at widths of 320, 375, 390, 768, and 1280 pixels, plus 200% text enlargement with increased text spacing. Automated axe WCAG A/AA checks detected no violations on the reviewed pages. Keyboard checks covered the skip link and back-to-top control. These results are not legal certification or a full assistive-technology audit.

Generated output, dependencies, and temporary review assets are kept locally and excluded from version control.
