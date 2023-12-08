/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SingleSelect({
  name,
  width = "300px",
  required,
  value = 0,
  onChange,
  options = [],
}) {
  return (
    <div>
      <p className="font-medium text-sm mt-[3px]">{name}</p>
      <Box
        sx={{
          "& .MuiInputBase-root": {
            width: width,
          },
        }}
      >
        <FormControl fullWidth>
          <Select
            value={value}
            onChange={onChange}
            size="small"
            displayEmpty
            renderValue={
              value !== 0 && value !== ""
                ? undefined
                : () => <ul className="text-gray-500">{name}</ul>
            }
            required={required}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224,
                },
              },
            }}
          >
            {
              options.length > 0 && options.map((item,index) => (
                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}