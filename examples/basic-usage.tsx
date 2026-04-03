'use client';

import Button from '@mui/material/Button';

import { SnackbarProvider, useSnackbar } from '../src';

function DemoButton() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button onClick={() => enqueueSnackbar('Example snackbar', { variant: 'info' })}>
      Show snackbar
    </Button>
  );
}

export default function BasicUsageExample() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <DemoButton />
    </SnackbarProvider>
  );
}
