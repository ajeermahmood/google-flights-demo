import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

interface DrawerComponentProps {
  open: boolean;
  buttons: {
    icon: React.JSX.Element;
    text: string;
    active: boolean;
  }[];
  onClose: () => void;
}

export default function DrawerComponent({
  open,
  buttons,
  onClose,
}: DrawerComponentProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {buttons.map((button, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                backgroundColor: button.active ? "#8ab4f83d" : "transparent",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{button.icon}</ListItemIcon>
                <ListItemText primary={button.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
