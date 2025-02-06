import { Button } from "@mui/material";
import { ReactNode } from "react";

interface CustomAppBarButtonProps {
  icon: ReactNode;
  text: string;
  active: boolean;
  onClick?: () => void;
}

const CustomAppBarButton: React.FC<CustomAppBarButtonProps> = ({
  icon,
  text,
  active,
  onClick,
}) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      startIcon={icon}
      sx={{
        color: active ? "#8ab4f8" : "unset",
        borderRadius: "20px",
        borderColor: "#3c4043",
        textTransform: "capitalize",
        backgroundColor: active ? "#394457" : "#202124",
        "&:hover": {
          borderColor: active ? "#3d485e" : "#5f6368",
          color: "#aecbfa",
          backgroundColor: active ? "#3d485e" : "#2a2c36",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomAppBarButton;
