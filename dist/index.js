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
var import_react2 = require("@iconify/react");
var import_Collapse = __toESM(require("@mui/material/Collapse"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_styles2 = require("@mui/material/styles");

// src/styles.ts
var import_react = require("react");
var import_notistack = require("notistack");
var import_styles = require("@mui/material/styles");
var ariaDescribedBy = "notistack-snackbar";
var countdownBorder = import_styles.keyframes`
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
      return isLight ? (0, import_styles.alpha)(theme.palette.common.white, 0.92) : (0, import_styles.alpha)(theme.palette.grey[900], 0.72);
    default:
      return theme.palette.text.primary;
  }
}
var BaseNotistackContent = (0, import_react.forwardRef)(
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
    return (0, import_react.createElement)(
      import_notistack.SnackbarContent,
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
      (0, import_react.createElement)(
        "svg",
        {
          className: "snackbar-progress",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true"
        },
        (0, import_react.createElement)("rect", {
          className: "snackbar-progress__track",
          x: "1.5",
          y: "1.5",
          width: "97",
          height: "97",
          rx: "11",
          ry: "11",
          pathLength: 100
        }),
        (0, import_react.createElement)("rect", {
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
      (0, import_react.createElement)(
        "div",
        {
          id: ariaDescribedBy,
          className: "snackbar-message"
        },
        !hideIconVariant ? icon : null,
        message
      ),
      action ? (0, import_react.createElement)(
        "div",
        {
          className: "snackbar-action"
        },
        action
      ) : null
    );
  }
);
var StyledNotistack = (0, import_styles.styled)(BaseNotistackContent)(({
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
      stroke: (0, import_styles.alpha)(progressColor, 0.14),
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
  info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "info", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react2.Icon, icon: "eva:info-fill", sx: { width: 24, height: 24 } }) }),
  success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "success", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react2.Icon, icon: "eva:checkmark-circle-2-fill", sx: { width: 24, height: 24 } }) }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "warning", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react2.Icon, icon: "eva:alert-triangle-fill", sx: { width: 24, height: 24 } }) }),
  error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIcon, { color: "error", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react2.Icon, icon: "solar:danger-bold", sx: { width: 24, height: 24 } }) })
};
var defaultComponents = {
  default: StyledNotistack,
  info: StyledNotistack,
  success: StyledNotistack,
  warning: StyledNotistack,
  error: StyledNotistack
};
var defaultAction = (snackbarId) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_IconButton.default, { size: "small", onClick: () => (0, import_notistack2.closeSnackbar)(snackbarId), sx: { p: 0.5 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Box.default, { component: import_react2.Icon, icon: "mingcute:close-line", sx: { width: 16, height: 16 } }) });
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