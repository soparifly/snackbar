'use client';

import { type ReactNode } from 'react';
import {
  SnackbarProvider as NotistackProvider,
  closeSnackbar,
  type SnackbarKey,
  type SnackbarProviderProps,
} from 'notistack';
import { Icon } from '@iconify/react';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { StyledIcon, StyledNotistack } from './styles';

type Props = Omit<SnackbarProviderProps, 'children' | 'TransitionComponent'> & {
  children: ReactNode;
  direction?: 'ltr' | 'rtl';
};

const defaultIconVariant: NonNullable<SnackbarProviderProps['iconVariant']> = {
  info: (
    <StyledIcon color="info">
      <Box component={Icon} icon="eva:info-fill" sx={{ width: 24, height: 24 }} />
    </StyledIcon>
  ),
  success: (
    <StyledIcon color="success">
      <Box component={Icon} icon="eva:checkmark-circle-2-fill" sx={{ width: 24, height: 24 }} />
    </StyledIcon>
  ),
  warning: (
    <StyledIcon color="warning">
      <Box component={Icon} icon="eva:alert-triangle-fill" sx={{ width: 24, height: 24 }} />
    </StyledIcon>
  ),
  error: (
    <StyledIcon color="error">
      <Box component={Icon} icon="solar:danger-bold" sx={{ width: 24, height: 24 }} />
    </StyledIcon>
  ),
};

const defaultComponents: NonNullable<SnackbarProviderProps['Components']> = {
  default: StyledNotistack,
  info: StyledNotistack,
  success: StyledNotistack,
  warning: StyledNotistack,
  error: StyledNotistack,
};

const defaultAction: SnackbarProviderProps['action'] = (snackbarId: SnackbarKey) => (
  <IconButton size="small" onClick={() => closeSnackbar(snackbarId)} sx={{ p: 0.5 }}>
    <Box component={Icon} icon="mingcute:close-line" sx={{ width: 16, height: 16 }} />
  </IconButton>
);

export default function SnackbarProvider({
  children,
  direction,
  maxSnack = 5,
  preventDuplicate = true,
  autoHideDuration = 3000,
  variant = 'success',
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  iconVariant = defaultIconVariant,
  Components = defaultComponents,
  action = defaultAction,
  ...other
}: Props) {
  const theme = useTheme();

  const isRTL = (direction ?? theme.direction) === 'rtl';

  return (
    <NotistackProvider
      maxSnack={maxSnack}
      preventDuplicate={preventDuplicate}
      autoHideDuration={autoHideDuration}
      TransitionComponent={isRTL ? Collapse : undefined}
      variant={variant}
      anchorOrigin={anchorOrigin}
      iconVariant={iconVariant}
      Components={Components}
      action={action}
      {...other}
    >
      {children}
    </NotistackProvider>
  );
}
