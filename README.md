# @kimbyulook/snackbar

Reusable snackbar provider and `useSnackbar` helpers built on top of `notistack` and MUI.

[![Snackbar demo](https://raw.githubusercontent.com/soparifly/snackbar/main/assets/snackbar-demo.gif)](https://soparifly.github.io/snackbar/)

Live demo: https://soparifly.github.io/snackbar/

## Standalone project

This folder is self-contained and can be moved into its own repository without depending on the parent Next.js project.

```bash
npm install
npm run dev
npm run build
npm run build:demo
```

`npm run dev` starts a Vite demo app so you can verify the snackbar behavior in the browser while developing the package.

## Install

```bash
npm install @kimbyulook/snackbar notistack @mui/material @emotion/react @emotion/styled @iconify/react react react-dom
```

## Usage

Wrap your application once with `SnackbarProvider`.

```tsx
import { SnackbarProvider } from '@kimbyulook/snackbar';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={2500}>
      {children}
    </SnackbarProvider>
  );
}
```

## Local demo

Run the example app locally from this package root.

```bash
npm install
npm run dev
```

Vite will open a browser URL where you can trigger each snackbar variant and verify stacking, dismissal, and countdown behavior.

Create a production build of the demo app with:

```bash
npm run build:demo
```

The static files are generated in `demo-dist/` so they do not overwrite the library package output in `dist/`.

Then use `useSnackbar` anywhere below the provider.

```tsx
'use client';

import Button from '@mui/material/Button';
import { useSnackbar } from '@kimbyulook/snackbar';

export function SaveButton() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button
      onClick={() => {
        enqueueSnackbar('Saved successfully', { variant: 'success' });
      }}
    >
      Save
    </Button>
  );
}
```

## Next.js App Router example

```tsx
import { SnackbarProvider } from '@kimbyulook/snackbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SnackbarProvider>{children}</SnackbarProvider>
      </body>
    </html>
  );
}
```

## Customization

`SnackbarProvider` forwards `notistack` provider props, and also accepts `direction` for RTL/LTR control. Snackbars with `autoHideDuration` show a countdown progress border that tracks the remaining time.

```tsx
<SnackbarProvider
  direction="rtl"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  maxSnack={3}
/>
```

## Package contents

- `SnackbarProvider`
- `useSnackbar` and the rest of the `notistack` exports
- `StyledNotistack`
- `StyledIcon`

## Publish checklist

```bash
npm version patch
npm run build
npm pack --dry-run
git tag snackbar-v$(node -p "require('./package.json').version")
git push origin main --tags
```

## Demo deployment

The demo app is configured for GitHub Pages on this repository.

```bash
npm run build:demo
```

After committing and pushing to `main`, GitHub Actions will build `demo-dist/` and deploy it to GitHub Pages. The expected demo URL is:

```text
https://soparifly.github.io/snackbar/
```

Before the first deployment, enable GitHub Pages in the repository settings and choose `GitHub Actions` as the source.