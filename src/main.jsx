import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import NotesApp from "./NotesApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>
);
