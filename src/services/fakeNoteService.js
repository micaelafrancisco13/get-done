import { getCurrentDate } from "../components/utils/dateFormat";
import * as categoriesAPI from "./fakeNoteCategoryService";

const notes = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    // publishDate: "2018-01-03T19:04:28.809Z",
    publishDate: "May 01, 2022",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit? Ipsum corporis expedita nam officiis illum facilis dolore tempora!`,
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    publishDate: "May 02, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit?`,
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "To-do" },
    publishDate: "May 03, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit? Ipsum corporis`,
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Reminder" },
    publishDate: "May 04, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit? Ipsum corporis expedita nam officiis illum facilis dolore tempora! Consequuntur tenetur consectetur quia soluta perferendis exercitationem facilis`,
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Reminder" },
    publishDate: "May 05, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit? Ipsum corporis expedita nam officiis illum facilis dolore tempora! Consequuntur`,
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Reminder" },
    publishDate: "May 06, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel voluptates maxime incidunt doloremque sapiente numquam debitis a placeat cupiditate dolorem accusantium velit? Ipsum corporis expedita nam officiis illum facilis dolore tempora! Consequuntur tenetur consectetur quia soluta perferendis exercitationem`,
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "To-do" },
    publishDate: "May 07, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    details: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae molestiae sed, doloribus aspernatur vel`,
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "To-do" },
    publishDate: "May 08, 2022",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    details: `Lorem ipsum, dolor sit amet`,
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
    publishDate: "May 09, 2022",
  },
];

export function getNotes() {
  return notes;
}

export function getNote(id) {
  return notes.find((n) => n._id === id);
}

export function saveNote(note) {
  let noteInDb = notes.find((n) => n._id === note._id) || {};
  console.log(noteInDb);
  noteInDb.title = note.title;
  noteInDb.details = note.details;
  noteInDb.category = categoriesAPI.categories.find(
    (c) => c._id === note.categoryID
  );
  noteInDb.publishDate = getCurrentDate();

  if (!noteInDb._id) {
    noteInDb._id = Date.now().toString();
    notes.unshift(noteInDb);
  }

  return noteInDb;
}

export function deleteNote(id) {
  let noteInDb = notes.find((n) => n._id === id);
  notes.splice(notes.indexOf(noteInDb), 1);
  return noteInDb;
}
