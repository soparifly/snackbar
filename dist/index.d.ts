import { SnackbarProviderProps, CustomContentProps } from 'notistack';
export * from 'notistack';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode } from 'react';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import { Theme } from '@mui/material/styles';

type Props = Omit<SnackbarProviderProps, 'children' | 'TransitionComponent'> & {
    children: ReactNode;
    direction?: 'ltr' | 'rtl';
};
declare function SnackbarProvider({ children, direction, maxSnack, preventDuplicate, autoHideDuration, variant, anchorOrigin, iconVariant, Components, action, ...other }: Props): react_jsx_runtime.JSX.Element;

declare const StyledNotistack: _emotion_styled.StyledComponent<CustomContentProps & react.RefAttributes<HTMLDivElement> & _mui_system.MUIStyledCommonProps<Theme>, {}, {}>;
type StyledIconProps = {
    color: 'info' | 'success' | 'warning' | 'error';
};
declare const StyledIcon: _emotion_styled.StyledComponent<_mui_system.MUIStyledCommonProps<Theme> & StyledIconProps, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

export { SnackbarProvider, StyledIcon, StyledNotistack };
