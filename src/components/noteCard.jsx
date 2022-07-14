import React, { Component } from "react";
// MUI components
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { get } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { blue, green, pink } from "@mui/material/colors";

class NoteCard extends Component {
  setbgColor = (noteCategory) => {
    if (noteCategory === "Work") return pink[500];
    else if (noteCategory === "Reminder") return green[500];
    return blue[500];
  };
  render() {
    const { note, onDelete } = this.props;
    const noteCategory = get(note, "category.name");

    return (
      <Card
        elevation={3}
      >
        <Box>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: () => this.setbgColor(noteCategory) }}>
                {noteCategory.charAt(0)}
              </Avatar>
            }
            title={note.title}
            subheader={`${note.publishDate} | ${noteCategory}`}
          />
        </Box>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/notes/${note._id}`}>
            <IconButton>
              <EditOutlinedIcon />
            </IconButton>
          </Link>
          <IconButton onClick={() => onDelete(note)}>
            <DeleteOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default ({ note, onDelete }) => {
  const navigate = useNavigate();

  return <NoteCard navigate={navigate} note={note} onDelete={onDelete} />;
};
