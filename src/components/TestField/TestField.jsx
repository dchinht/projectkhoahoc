/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TestFields({name,placeholder='Please enter ...', type='text',
value,onChange,helperText,error,required=false}) {
  return (
    <div>
      <p className="font-medium text-sm mt-3">{name}</p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: "300px",
            height: "30px",
            marginBottom: "10px",
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

export default TestFields