export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Work" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Reminder" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "To-do" },
];

export function getNoteCategories() {
  return categories.filter((g) => g);
}
