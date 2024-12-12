'use client'
import { AppBar, Toolbar, Menu, MenuItem, Button, Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const NavbarStudent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const menuItems = [
    { label: "My Classes", action: () => console.log("My Classes clicked") },
    {
      label: "Account Settings",
      action: () => console.log("Account Settings clicked"),
    },
    {
      label: "Language: English",
      action: () => console.log("Language: English clicked"),
    },
    { label: "Team Plans", action: () => console.log("Team Plans clicked") },
    {
      label: "Refer a Friend",
      action: () => console.log("Refer a Friend clicked"),
    },
    {
      label: "Redeem Perks",
      action: () => console.log("Redeem Perks clicked"),
    },
    { label: "Help", action: () => console.log("Help clicked") },
    { label: "Sign Out", action: () => console.log("Sign Out clicked") },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        className="flex w-full justify-center items-center"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
          <Box>
            <Image
              src={"/avatar.png"}
              alt={"user avatar"}
              width={50}
              height={50}
              style={{ cursor: "pointer" }}
              onClick={handleMenuClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    item.action();
                    handleMenuClose();
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarStudent;
