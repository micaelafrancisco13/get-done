import React, { Component } from "react";
import Joi from "joi-browser";

import TextField from "@mui/material/TextField";
import RadioButton from "./radioButton";
import Button from "@mui/material/Button";

import { get } from "lodash";
import { resize } from "../utils/sizing";

class AuthForm extends Component {
  state = {
    account: {},
    errors: [],
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    let errors = [];
    for (let item of error.details) {
      errors[item.path[0]] = {};
      errors[item.path[0]]["state"] = true;
      errors[item.path[0]]["message"] = item.message + ".";
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || [] });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    errors[input.name] = {};

    if (errorMessage) {
      errors[input.name]["state"] = true;
      errors[input.name]["message"] = errorMessage + ".";
    }
    this.setState({ errors: errors || [] });

    const account = { ...this.state.account };

    account[input.name] = input.value;
    this.setState({ account });
  };

  renderTextField(name, customColor, label, numberOfRows, isMultiline) {
    const { account, errors } = this.state;

    return (
      <TextField
        onChange={this.handleChange}
        error={get(errors, `${name}.state`)}
        helperText={get(errors, `${name}.message`)}
        name={name}
        value={account[name]}
        id="outlined-basic"
        variant="outlined"
        color={customColor}
        label={label}
        rows={numberOfRows}
        multiline={isMultiline}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: `${resize(8)}rem`,
            },
          },
        }}
      />
    );
  }

  renderPasswordField(customColor) {
    const { errors } = this.state;
    return (
      <TextField
        onChange={this.handleChange}
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        color={customColor}
        autoComplete="current-password"
        error={get(errors, `password.state`)}
        helperText={get(errors, `password.message`)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: `${resize(8)}rem`,
            },
          },
        }}
      />
    );
  }

  renderRadioButton(name, label, data) {
    const { account, errors } = this.state;
    return (
      <RadioButton
        onChange={this.handleChange}
        value={account.categoryID}
        name={name}
        label={label}
        error={errors[name]}
        data={data}
      />
    );
  }

  renderButton(sxObject, customColor, label, endIcon) {
    return (
      <Button
        sx={sxObject}
        type="submit"
        color={customColor}
        variant="contained"
        endIcon={endIcon}
      >
        {label}
      </Button>
    );
  }
}

export default AuthForm;
