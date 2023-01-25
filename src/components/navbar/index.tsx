import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "4rem" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            City Information
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/information" sx={{ color: "white" }}>
              Información
            </Button>
            |
            <Button href="/history" sx={{ color: "white" }}>
              Historial
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
