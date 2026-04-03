import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createRoot } from "react-dom/client";

import BasicUsageExample from "./basic-usage";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
    },
    background: {
      default: "#f4efe7",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"IBM Plex Sans KR", "Pretendard", sans-serif',
    h3: {
      fontSize: "clamp(2rem, 5vw, 3.2rem)",
      lineHeight: 1.05,
    },
  },
});

function DemoApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          px: 2,
          py: 6,
          background:
            "radial-gradient(circle at top, rgba(15,118,110,0.16), transparent 30%), linear-gradient(135deg, #f4efe7 0%, #e6edf5 100%)",
        }}
      >
        <BasicUsageExample />
      </Box>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(<DemoApp />);
