import React from "react";
import Joi from "joi-browser";

// common components
import CreateNoteForm from "./common/createNoteForm";

// MUI components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// services
import { getNoteCategories } from "../services/fakeNoteCategoryService";
import { getNote, saveNote } from "./../services/fakeNoteService";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// rrd

import withHOC from "./withHOC";

class NoteForm extends CreateNoteForm {
  state = {
    field: {
      title: "",
      details: "",
      categoryID: "",
    },
    noteCategories: [],
    errors: [],
  };

  schema = {
    _id: Joi.string(),
    categoryID: Joi.string().required().label("Note category"),
    title: Joi.string().required().label("Note title"),
    details: Joi.string().required().label("Note details"),
  };

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        field: {
          title: "",
          details: "",
          categoryID: "",
        },
      });
    }
  }
  componentDidMount() {
    const noteCategories = getNoteCategories();
    this.setState({ noteCategories });

    const { id } = this.props;

    if (id === "new") return;
    const note = getNote(id);

    const { navigate } = this.props;
    if (!note) {
      navigate("/not-found", { replace: true });
      return navigate(0);
    }

    const field = this.mapToViewModel(note);
    this.setState({ field });
  }

  mapToViewModel(note) {
    return {
      _id: note._id,
      title: note.title,
      details: note.details,
      categoryID: note.category._id,
    };
  }

  doSubmit = () => {
    const { navigate } = this.props;

    saveNote(this.state.field);

    // back to movies table
    navigate("/notes");
  };

  render() {
    const { noteCategories } = this.state;
    const { id } = this.props;

    const sxBox = {
      "& > :not(style)": { my: 1.5, display: "flex" },
    };

    const sxButton = {
      width: {
        xs: "100%",
        sm: 150,
      },
    };

    return (
      <Container fixed sx={{ px: 0, height: "100vh" }}>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          {id === "new" ? "Create a new note" : "Update this current note"}
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <Box sx={sxBox}>
            {this.renderTextField("title", "secondary", "Note Title", 1, false)}
            {this.renderTextField(
              "details",
              "secondary",
              "Note Details",
              4,
              true
            )}
            {this.renderRadioButton(
              "categoryID",
              "Note Category",
              noteCategories
            )}
            {this.renderButton(
              sxButton,
              "secondary",
              "Submit",
              <KeyboardArrowRightIcon />
            )}
          </Box>
        </form>
      </Container>
    );
  }
}

export default withHOC(NoteForm);
