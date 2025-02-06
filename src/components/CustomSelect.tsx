import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface CustomSelectProps {
  value: any;
  onChange: (event: SelectChangeEvent) => void;
  options: { label: any; value: any }[];
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        margin: "0 !important",
        "&:hover": {
          backgroundColor: (theme) => theme.palette.action.hover,
          borderRadius: "4px",
        },
        "& .MuiInput-underline:before": { borderBottom: "none" },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
        "& .Mui-focused": {
          backgroundColor: (theme) => theme.palette.action.hover,
          "& .MuiInput-underline:after": {
            borderBottom: "2px solid",
            borderColor: (theme) => theme.palette.primary.main,
          },
        },
        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <Select
        value={value}
        onChange={onChange}
        size="small"
        className={`w-full px-4 pt-2 pb-1 ${className}`}
        sx={{
          "& .MuiSvgIcon-root": {
            right: 10,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
