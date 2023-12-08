/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TestFieldCheckOut({name,width = "300px",placeholder='Please enter ...', type='text',
value,onChange,helperText,error,required=false}) {
  return (
    <div>
      <p className="font-medium text-sm mt-[3px]">{name}</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: width,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          placeholder={placeholder}
          variant="outlined"
          type={type}
          value={value}
          onChange={onChange}
          helperText={helperText}
          error={error}
          required={required ?? null}
        />
      </Box>
    </div>
  )
}

export default TestFieldCheckOut