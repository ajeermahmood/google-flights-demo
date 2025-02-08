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
  startAdornment?: React.JSX.Element;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  className,
  startAdornment,
}) => {
  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        margin: "0 !important",
        "& .MuiInputBase-root": {
          "& .MuiSelect-select": {
            paddingRight: "20px !important",
          },
        },
        "&:hover": {
          backgroundColor: (theme) => theme.palette.action.hover,
          borderRadius: "4px",
          "& .MuiSelect-icon": {
            color: "#e8eaed",
          },
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
          "& .MuiSelect-icon": {
            color: "#8ab4f8",
          },
        },

        transition: "background-color 0.2s ease-in-out",
      }}
    >
      <Select
        value={value}
        onChange={onChange}
        size="small"
        className={`w-full px-3 pt-[6px] pb-[3px] ${className}`}
        startAdornment={startAdornment}
        sx={{
          "& .MuiSvgIcon-root": {
            color: "#9aa0a6",
            marginTop: "-6px",
            fontSize: "20px",
            marginRight: "8px",
          },
          "& .MuiSelect-icon": {
            right: 0,
            top: 12,
            fontSize: "20px",
          },
          fontSize: "14px",
          color: "#bdc1c6",
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
