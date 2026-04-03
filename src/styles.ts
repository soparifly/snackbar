import { createElement, forwardRef } from 'react';
import { SnackbarContent, type CustomContentProps } from 'notistack';
import { styled, alpha, keyframes, type Theme } from '@mui/material/styles';

const ariaDescribedBy = 'notistack-snackbar';

const countdownBorder = keyframes`
  from {
    stroke-dashoffset: 0;
    opacity: 0.9;
  }

  to {
    stroke-dashoffset: 100;
    opacity: 0.28;
  }
`;

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

function getProgressColor(theme: Theme, variant: CustomContentProps['variant']) {
  const isLight = theme.palette.mode === 'light';

  switch (variant) {
    case 'success':
    case 'error':
    case 'warning':
    case 'info':
      return theme.palette[variant].main;
    case 'default':
      return isLight
        ? alpha(theme.palette.common.white, 0.92)
        : alpha(theme.palette.grey[900], 0.72);
    default:
      return theme.palette.text.primary;
  }
}

const BaseNotistackContent = forwardRef<HTMLDivElement, CustomContentProps>(
  function BaseNotistackContent(props, ref) {
    const {
      id,
      message,
      action: componentOrFunctionAction,
      iconVariant,
      variant,
      hideIconVariant,
      className,
      style,
      autoHideDuration,
      persist,
    } = props;

    const icon = iconVariant[variant];
    const action =
      typeof componentOrFunctionAction === 'function'
        ? componentOrFunctionAction(id)
        : componentOrFunctionAction;
    const hasTimer = !persist && typeof autoHideDuration === 'number' && autoHideDuration > 0;

    return createElement(
      SnackbarContent,
      {
        ref,
        role: 'alert',
        'aria-describedby': ariaDescribedBy,
        style,
        className: joinClassNames(
          'notistack-MuiContent',
          `notistack-MuiContent-${variant}`,
          className,
          !hideIconVariant && Boolean(icon) && 'snackbar-has-icon',
          hasTimer && 'snackbar-has-timer'
        ),
      },
      createElement(
        'svg',
        {
          className: 'snackbar-progress',
          viewBox: '0 0 100 100',
          preserveAspectRatio: 'none',
          'aria-hidden': 'true',
        },
        createElement('rect', {
          className: 'snackbar-progress__track',
          x: '1.5',
          y: '1.5',
          width: '97',
          height: '97',
          rx: '11',
          ry: '11',
          pathLength: 100,
        }),
        createElement('rect', {
          className: 'snackbar-progress__value',
          x: '1.5',
          y: '1.5',
          width: '97',
          height: '97',
          rx: '11',
          ry: '11',
          pathLength: 100,
        })
      ),
      createElement(
        'div',
        {
          id: ariaDescribedBy,
          className: 'snackbar-message',
        },
        !hideIconVariant ? icon : null,
        message
      ),
      action
        ? createElement(
            'div',
            {
              className: 'snackbar-action',
            },
            action
          )
        : null
    );
  }
);

export const StyledNotistack = styled(BaseNotistackContent)(({
  theme,
  variant = 'default',
  autoHideDuration,
  persist,
}) => {
  const isLight = theme.palette.mode === 'light';
  const customShadows = (theme as typeof theme & { customShadows?: { z8?: string } }).customShadows;
  const hasTimer = !persist && typeof autoHideDuration === 'number' && autoHideDuration > 0;
  const progressColor = getProgressColor(theme, variant);

  return {
    '--snackbar-progress-color': progressColor,
    '--snackbar-progress-duration': hasTimer ? `${autoHideDuration}ms` : '0ms',
    position: 'relative',
    overflow: 'hidden',
    '& #notistack-snackbar': {
      ...theme.typography.subtitle2,
      padding: theme.spacing(1, 0),
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    },
    '&.notistack-MuiContent': {
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.primary,
      boxShadow: customShadows?.z8 ?? theme.shadows[8],
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      alignItems: 'center',
    },
    '&.notistack-MuiContent-default': {
      padding: theme.spacing(1),
      color: isLight ? theme.palette.common.white : theme.palette.grey[800],
      backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
    },
    '& .snackbar-message': {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      minWidth: 0,
      position: 'relative',
      zIndex: 1,
    },
    '& .snackbar-action': {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing(2),
      marginRight: theme.spacing(-1),
      position: 'relative',
      zIndex: 1,
    },
    '& .snackbar-progress': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity: hasTimer ? 1 : 0,
      transition: 'opacity 120ms ease',
    },
    '& .snackbar-progress__track': {
      fill: 'none',
      stroke: alpha(progressColor, 0.14),
      strokeWidth: 2,
      vectorEffect: 'non-scaling-stroke',
    },
    '& .snackbar-progress__value': {
      fill: 'none',
      stroke: 'var(--snackbar-progress-color)',
      strokeWidth: 2.5,
      strokeLinecap: 'round',
      strokeDasharray: 100,
      strokeDashoffset: 0,
      vectorEffect: 'non-scaling-stroke',
      animation: hasTimer
        ? `${countdownBorder} var(--snackbar-progress-duration) linear forwards`
        : 'none',
      transformOrigin: 'center',
      transform: 'rotate(-90deg)',
      transformBox: 'fill-box',
    },
    '&:hover .snackbar-progress__value, &:focus-within .snackbar-progress__value': {
      animationPlayState: 'paused',
    },
  };
});

type StyledIconProps = {
  color: 'info' | 'success' | 'warning' | 'error';
};

export const StyledIcon = styled('span')<StyledIconProps>(({ color, theme }) => ({
  width: 44,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1.5),
  color: theme.palette[color].main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[color].main, 0.16),
}));
