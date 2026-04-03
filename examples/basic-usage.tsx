import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SnackbarProvider, useSnackbar } from "../src";

function DemoButton() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack
      spacing={1.5}
      direction={{ xs: "column", sm: "row" }}
      flexWrap="wrap"
    >
      <Button
        variant="contained"
        onClick={() =>
          enqueueSnackbar("Saved successfully", { variant: "success" })
        }
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() =>
          enqueueSnackbar("Background sync is in progress", { variant: "info" })
        }
      >
        Info
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() =>
          enqueueSnackbar("Please review the highlighted fields", {
            variant: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() =>
          enqueueSnackbar("Something went wrong", { variant: "error" })
        }
      >
        Error
      </Button>
      <Button
        variant="outlined"
        onClick={() =>
          enqueueSnackbar("Pinned notification", {
            variant: "default",
            persist: true,
          })
        }
      >
        Persistent
      </Button>
    </Stack>
  );
}

export default function BasicUsageExample() {
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={2500}>
      <Paper
        elevation={0}
        sx={{
          width: "min(720px, 100%)",
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,247,250,0.94) 100%)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="overline"
              sx={{ letterSpacing: "0.18em", color: "text.secondary" }}
            >
              Snackbar Demo
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, fontWeight: 700 }}>
              Test interactive notifications
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1.5, maxWidth: 560, color: "text.secondary" }}
            >
              Trigger each variant to verify icon rendering, stack behavior,
              dismiss actions, and the countdown border tied to auto hide
              duration.
            </Typography>
          </Box>
          <DemoButton />
        </Stack>
      </Paper>
    </SnackbarProvider>
  );
}
