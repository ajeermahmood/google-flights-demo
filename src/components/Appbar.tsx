import MenuIcon from "@mui/icons-material/Menu";
import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import BackpackIcon from "@mui/icons-material/Backpack";
import CustomAppBarButton from "./CustomAppBarButton";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const buttons = [
  { icon: <BackpackIcon />, text: "Travel", active: false },
  { icon: <TravelExploreIcon />, text: "Explore", active: false },
  { icon: <FlightIcon />, text: "Flights", active: true },
  { icon: <HotelIcon />, text: "Hotels", active: false },
  { icon: <HomeIcon />, text: "Vacation Rentals", active: false },
];

export default function AppBarComponent() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        borderBottom: "1px solid #5f6368",
        backgroundColor: "#202124",
        ".MuiToolbar-root": {
          minHeight: "48px",
          paddingLeft: "16px",
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
        >
          <MenuIcon />
        </IconButton>
        <div className="flex h-[48px] items-center pr-[30px]">
          <Image
            src={"/images/googlelogo_light_clr_74x24px.svg"}
            height={24}
            width={74}
            alt="Google Logo"
            className="h-[24px] w-[74px] mb-[-4px]"
          />
        </div>

        <Stack direction="row" spacing={1}>
          {buttons.map((button, index) => (
            <CustomAppBarButton
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
      </Toolbar>
    </AppBar>
  );
}
