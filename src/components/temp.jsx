import React from "react";
import Joi from "joi-browser";

// common components
import Form from "./common/form";

// MUI components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// services
import { getNoteCategories } from "../services/fakeNoteCategoryService";
import { getNote, saveNote } from "./../services/fakeNoteService";

// rrd

import withNavigate from "./withNavigate";

class NoteForm extends Form {
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

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || [] });

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errors) {
      errors[input.name] = {};
      errors[input.name]["state"] = true;
      errors[input.name]["message"] = errorMessage + ".";
    }
    this.setState({ errors: errors || [] });

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
}

export default withNavigate(NoteForm);
