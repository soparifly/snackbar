"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SnackbarProvider: () => SnackbarProvider,
  StyledIcon: () => StyledIcon,
  StyledNotistack: () => StyledNotistack
});
module.exports = __toCommonJS(index_exports);
__reExport(index_exports, require("notistack"), module.exports);

// src/snackbar-provider.tsx
var import_notistack2 = require("notistack");
var import_react = require("@iconify/react");
var import_Collapse = __toESM(require("@mui/material/Collapse"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_styles2 = require("@mui/material/styles");

// src/styles.ts
var import_notistack = require("notistack");
var import_styles = require("@mui/material/styles");
var StyledNotistack = (0, import_styles.styled)(import_notistack.MaterialDesignContent)(({ theme }) => {
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
var StyledIcon = (0, import_styles.styled)("span")(({ color, theme }) => ({
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1.5),
  color: theme.palette[color].main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: (0, import_styles.alpha)(theme.palette[color].main, 0.16)
}));

// src/snackbar-provider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var defaultIconVariant = {
  info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "info", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react.Icon, icon: "eva:info-fill", sx: { width: 24, height: 24 } }) }),
  success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "success", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react.Icon, icon: "eva:checkmark-circle-2-fill", sx: { width: 24, height: 24 } }) }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "warning", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react.Icon, icon: "eva:alert-triangle-fill", sx: { width: 24, height: 24 } }) }),
  error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "error", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react.Icon, icon: "solar:danger-bold", sx: { width: 24, height: 24 } }) })
};
var defaultComponents = {
  default: StyledNotistack,
  info: StyledNotistack,
  success: StyledNotistack,
  warning: StyledNotistack,
  error: StyledNotistack
};
var defaultAction = (snackbarId) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_IconButton.default, { size: "small", onClick: () => (0, import_notistack2.closeSnackbar)(snackbarId), sx: { p: 0.5 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react.Icon, icon: "mingcute:close-line", sx: { width: 16, height: 16 } }) });
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
  const theme = (0, import_styles2.useTheme)();
  const isRTL = (direction != null ? direction : theme.direction) === "rtl";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_notistack2.SnackbarProvider,
    {
      maxSnack,
      preventDuplicate,
      autoHideDuration,
      TransitionComponent: isRTL ? import_Collapse.default : void 0,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SnackbarProvider,
  StyledIcon,
  StyledNotistack,
  ...require("notistack")
});
//# sourceMappingURL=index.js.map