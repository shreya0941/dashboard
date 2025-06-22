import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, color: '#003f2d' }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;