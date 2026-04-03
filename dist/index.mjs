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
import { MaterialDesignContent } from "notistack";
import { styled, alpha } from "@mui/material/styles";
var StyledNotistack = styled(MaterialDesignContent)(({ theme }) => {
  var _a;
  const isLight = theme.palette.mode === "light";
  const customShadows = theme.customShadows;
  return {
    "& #notistack-snackbar": {
      ...theme.typography.subtitle2,
      padding: 0,
      flexGrow: 1
    },
    "&.notistack-MuiContent": {
      padding: theme.spacing(0.5),
      paddingRight: theme.spacing(2),
      color: theme.palette.text.primary,
      boxShadow: (_a = customShadows == null ? void 0 : customShadows.z8) != null ? _a : theme.shadows[8],
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper
    },
    "&.notistack-MuiContent-default": {
      padding: theme.spacing(1),
      color: isLight ? theme.palette.common.white : theme.palette.grey[800],
      backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white
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