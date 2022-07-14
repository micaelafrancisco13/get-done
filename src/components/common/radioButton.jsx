import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { get } from "lodash";

const RadioButton = ({ label, data, error, ...rest }) => {
  return (
    <FormControl error={get(error, "state")} variant="standard">
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        {...rest}
        aria-labelledby="demo-row-radio-buttons-group-label"
      >
        {data.map((item) => (
          <FormControlLabel
            key={item._id}
            value={item._id}
            control={<Radio />}
            label={item.name}
          />
        ))}
        <FormHelperText>{get(error, "message")}</FormHelperText>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
