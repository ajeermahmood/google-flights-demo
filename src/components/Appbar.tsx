"use client";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import BackpackIcon from "@mui/icons-material/Backpack";
import FlightIcon from "@mui/icons-material/Flight";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Button, Stack, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import DrawerComponent from "./Drawer";

const buttons = [
  { icon: <BackpackIcon />, text: "Travel", active: false },
  { icon: <TravelExploreIcon />, text: "Explore", active: false },
  { icon: <FlightIcon />, text: "Flights", active: true },
  { icon: <HotelIcon />, text: "Hotels", active: false },
  { icon: <HomeIcon />, text: "Vacation Rentals", active: false },
];

export default function AppBarComponent() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          borderBottom: "1px solid #5f6368",
          backgroundColor: "#202124",
          ".MuiToolbar-root": {
            minHeight: "48px",
            paddingLeft: "16px",
            "@media (max-width: 375px)": {
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          },
        }}
        className="p-[8px]"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex h-[48px] items-center pr-[30px]">
            <Image
              src={"/images/googlelogo_light_clr_74x24px.svg"}
              height={24}
              width={74}
              alt="Google Logo"
              className="h-[24px] w-[74px] mb-[-4px] select-none"
            />
          </div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {!isSmallScreen && (
              <Stack direction="row" spacing={1}>
                {buttons.map((button, index) => (
                  <CustomButton
                    key={index}
                    icon={React.cloneElement(button.icon, {
                      sx: { color: "#aecbfa", width: "18px" },
                    })}
                    text={button.text}
                    onClick={() => {}}
                    active={button.active}
                  />
                ))}
              </Stack>
            )}

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                width: isSmallScreen ? "100%" : null,
                justifyContent: isSmallScreen ? "end" : null,
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 0.5,
                  "@media (max-width: 375px)": {
                    padding: "5px",
                  },
                }}
              >
                <LightModeOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 0.5,
                  "@media (max-width: 375px)": {
                    padding: "5px",
                  },
                }}
              >
                <AppsRoundedIcon />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#8ab4f8",
                  fontWeight: "500",
                  padding: "9px 23px",
                  fontSize: "14px",
                  lineHeight: "16px",
                  "@media (max-width: 375px)": {
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  },
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Drawer Component */}
      <DrawerComponent
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        buttons={buttons}
      />
    </>
  );
}
