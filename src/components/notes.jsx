import { Container, Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Masonry from "react-masonry-css";

// services
import { deleteNote, getNotes } from "../services/fakeNoteService";
import NoteCard from "./noteCard";
class Notes extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    const notes = getNotes();
    this.setState({ notes });
  }

  handleDelete = (note) => {
    const notes = this.state.notes.filter((n) => n._id !== note._id);
    this.setState({ notes });

    deleteNote(note._id);
  };

  render() {
    const { notes } = this.state;

    const sxBox = {
      textAlign: {
        xs: "center",
        sm: "right",
      },
      mb: 2.4,
    };
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };
    return (
      <Container fixed sx={{ px: 0 }}>
        <Box sx={sxBox}>
          <Typography>{`You currently have ${notes.length} notes.`}</Typography>
        </Box>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes.map((note) => (
            <div key={note._id} xs={12} md={6} lg={4}>
              <NoteCard note={note} onDelete={this.handleDelete} />
            </div>
          ))}
        </Masonry>
      </Container>
    );
  }
}

export default Notes;
