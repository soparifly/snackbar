// src/index.ts
export * from "notistack";

// src/snackbar-provider.tsx
import {
  SnackbarProvider as NotistackProvider,
  closeSnackbar
} from "notistack";
import { Icon } from "@iconify/react";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

// src/styles.ts
import { createElement, forwardRef } from "react";
import { SnackbarContent } from "notistack";
import { styled, alpha, keyframes } from "@mui/material/styles";
var ariaDescribedBy = "notistack-snackbar";
var countdownBorder = keyframes`
  from {
    stroke-dashoffset: 0;
    opacity: 0.9;
  }

  to {
    stroke-dashoffset: 100;
    opacity: 0.28;
  }
`;
function joinClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}
function getProgressColor(theme, variant) {
  const isLight = theme.palette.mode === "light";
  switch (variant) {
    case "success":
    case "error":
    case "warning":
    case "info":
      return theme.palette[variant].main;
    case "default":
      return isLight ? alpha(theme.palette.common.white, 0.92) : alpha(theme.palette.grey[900], 0.72);
    default:
      return theme.palette.text.primary;
  }
}
var BaseNotistackContent = forwardRef(
  function BaseNotistackContent2(props, ref) {
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
      persist
    } = props;
    const icon = iconVariant[variant];
    const action = typeof componentOrFunctionAction === "function" ? componentOrFunctionAction(id) : componentOrFunctionAction;
    const hasTimer = !persist && typeof autoHideDuration === "number" && autoHideDuration > 0;
    return createElement(
      SnackbarContent,
      {
        ref,
        role: "alert",
        "aria-describedby": ariaDescribedBy,
        style,
        className: joinClassNames(
          "notistack-MuiContent",
          `notistack-MuiContent-${variant}`,
          className,
          !hideIconVariant && Boolean(icon) && "snackbar-has-icon",
          hasTimer && "snackbar-has-timer"
        )
      },
      createElement(
        "svg",
        {
          className: "snackbar-progress",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true"
        },
        createElement("rect", {
          className: "snackbar-progress__track",
          x: "1.5",
          y: "1.5",
          width: "97",
          height: "97",
          rx: "11",
          ry: "11",
          pathLength: 100
        }),
        createElement("rect", {
          className: "snackbar-progress__value",
          x: "1.5",
          y: "1.5",
          width: "97",
          height: "97",
          rx: "11",
          ry: "11",
          pathLength: 100
        })
      ),
      createElement(
        "div",
        {
          id: ariaDescribedBy,
          className: "snackbar-message"
        },
        !hideIconVariant ? icon : null,
        message
      ),
      action ? createElement(
        "div",
        {
          className: "snackbar-action"
        },
        action
      ) : null
    );
  }
);
var StyledNotistack = styled(BaseNotistackContent)(({
  theme,
  variant = "default",
  autoHideDuration,
  persist
}) => {
  var _a;
  const isLight = theme.palette.mode === "light";
  const customShadows = theme.customShadows;
  const hasTimer = !persist && typeof autoHideDuration === "number" && autoHideDuration > 0;
  const progressColor = getProgressColor(theme, variant);
  return {
    "--snackbar-progress-color": progressColor,
    "--snackbar-progress-duration": hasTimer ? `${autoHideDuration}ms` : "0ms",
    position: "relative",
    overflow: "hidden",
    "& #notistack-snackbar": {
      ...theme.typography.subtitle2,
      padding: theme.spacing(1, 0),
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      position: "relative",
      zIndex: 1
    },
    "&.notistack-MuiContent": {
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.primary,
      boxShadow: (_a = customShadows == null ? void 0 : customShadows.z8) != null ? _a : theme.shadows[8],
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      alignItems: "center"
    },
    "&.notistack-MuiContent-default": {
      padding: theme.spacing(1),
      color: isLight ? theme.palette.common.white : theme.palette.grey[800],
      backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white
    },
    "& .snackbar-message": {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      minWidth: 0,
      position: "relative",
      zIndex: 1
    },
    "& .snackbar-action": {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      paddingLeft: theme.spacing(2),
      marginRight: theme.spacing(-1),
      position: "relative",
      zIndex: 1
    },
    "& .snackbar-progress": {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      opacity: hasTimer ? 1 : 0,
      transition: "opacity 120ms ease"
    },
    "& .snackbar-progress__track": {
      fill: "none",
      stroke: alpha(progressColor, 0.14),
      strokeWidth: 2,
      vectorEffect: "non-scaling-stroke"
    },
    "& .snackbar-progress__value": {
      fill: "none",
      stroke: "var(--snackbar-progress-color)",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: 100,
      strokeDashoffset: 0,
      vectorEffect: "non-scaling-stroke",
      animation: hasTimer ? `${countdownBorder} var(--snackbar-progress-duration) linear forwards` : "none",
      transformOrigin: "center",
      transform: "rotate(-90deg)",
      transformBox: "fill-box"
    },
    "&:hover .snackbar-progress__value, &:focus-within .snackbar-progress__value": {
      animationPlayState: "paused"
    }
  };
});
var StyledIcon = styled("span")(({ color, theme }) => ({
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1.5),
  color: theme.palette[color].main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[color].main, 0.16)
}));

// src/snackbar-provider.tsx
import { jsx } from "react/jsx-runtime";
var defaultIconVariant = {
  info: /* @__PURE__ */ jsx(StyledIcon, { color: "info", children: /* @__PURE__ */ jsx(Box, { component: Icon, icon: "eva:info-fill", sx: { width: 24, height: 24 } }) }),
  success: /* @__PURE__ */ jsx(StyledIcon, { color: "success", children: /* @__PURE__ */ jsx(Box, { component: Icon, icon: "eva:checkmark-circle-2-fill", sx: { width: 24, height: 24 } }) }),
  warning: /* @__PURE__ */ jsx(StyledIcon, { color: "warning", children: /* @__PURE__ */ jsx(Box, { component: Icon, icon: "eva:alert-triangle-fill", sx: { width: 24, height: 24 } }) }),
  error: /* @__PURE__ */ jsx(StyledIcon, { color: "error", children: /* @__PURE__ */ jsx(Box, { component: Icon, icon: "solar:danger-bold", sx: { width: 24, height: 24 } }) })
};
var defaultComponents = {
  default: StyledNotistack,
  info: StyledNotistack,
  success: StyledNotistack,
  warning: StyledNotistack,
  error: StyledNotistack
};
var defaultAction = (snackbarId) => /* @__PURE__ */ jsx(IconButton, { size: "small", onClick: () => closeSnackbar(snackbarId), sx: { p: 0.5 }, children: /* @__PURE__ */ jsx(Box, { component: Icon, icon: "mingcute:close-line", sx: { width: 16, height: 16 } }) });
function SnackbarProvider({
  children,
  direction,
  maxSnack = 5,
  preventDuplicate = true,
  autoHideDuration = 3e3,
  variant = "success",
  anchorOrigin = { vertical: "top", horizontal: "right" },
  iconVariant = defaultIconVariant,
  Components = defaultComponents,
  action = defaultAction,
  ...other
}) {
  const theme = useTheme();
  const isRTL = (direction != null ? direction : theme.direction) === "rtl";
  return /* @__PURE__ */ jsx(
    NotistackProvider,
    {
      maxSnack,
      preventDuplicate,
      autoHideDuration,
      TransitionComponent: isRTL ? Collapse : void 0,
      variant,
      anchorOrigin,
      iconVariant,
      Components,
      action,
      ...other,
      children
    }
  );
}
export {
  SnackbarProvider,
  StyledIcon,
  StyledNotistack
};
//# sourceMappingURL=index.mjs.map