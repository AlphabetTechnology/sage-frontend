"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import Image from "next/image";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#fff" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: 2, display: isMobile ? "block" : "none" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: isMobile ? "block" : "none", font: "#000" }}
        >
          <MenuItem onClick={handleMenuClose}>Subjects</MenuItem>
          <MenuItem onClick={handleMenuClose}>Courses</MenuItem>
          <MenuItem onClick={handleMenuClose}>Degrees</MenuItem>
          <MenuItem onClick={handleMenuClose}>For Business</MenuItem>
        </Menu>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Future Learn
        </Typography> */}
        <div className="flex items-center justify-between w-full">
          <div>
            <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
          </div>
          <div className="flex">
            <Button
              color="inherit"
              sx={{
                display: isMobile ? "none" : "block",
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Subjects
            </Button>
            <Button
              color="inherit"
              sx={{
                display: isMobile ? "none" : "block",
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Courses
            </Button>
            <Button
              color="inherit"
              sx={{
                display: isMobile ? "none" : "block",
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Degrees
            </Button>
            <Button
              color="inherit"
              sx={{
                display: isMobile ? "none" : "block",
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              For Business
            </Button>
            {/* <IconButton
              color="inherit"
              sx={{ display: isMobile ? "none" : "block", color: "#000" }}
            >
              <Search />
            </IconButton> */}
            <Button
              variant="outlined"
              sx={{
                display: isMobile ? "none" : "block",
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                border: "2px solid #f0bd6c",
              }}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: isMobile ? "none" : "block",
                fontSize: "1rem",
                fontWeight: "500",
                backgroundColor: "#f0bd6c",
              }}
              className="px-3 ml-2"
            >
              Register
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
