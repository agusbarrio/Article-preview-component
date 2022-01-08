import sharePanel from "./sharePanel.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  sharePanel(".share-box", ".share-box + button");
});
