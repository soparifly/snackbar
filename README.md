# @kimbyulook/snackbar

Reusable snackbar provider and `useSnackbar` helpers built on top of `notistack` and MUI.

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

`SnackbarProvider` forwards `notistack` provider props, and also accepts `direction` for RTL/LTR control.

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
npm run build
npm pack --dry-run
npm publish --access public
```