import React, { useEffect, useState } from "react";
import NoteList from "./NoteList";

const NotesApp = () => {
  const [note, setNote] = useState("");
  // NoteList
  const [submittedNote, setSubmittedNote] = useState([]);

  // Función que maneja los cambios en el input
  const handleInputChange = (event) => {
    // Actualiza el estado con lo que el usuario escribe
    setNote(event.target.value);
  };

  // Función que detecta si el usuario presionó Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && note.trim() !== "") {
      setSubmittedNote([...submittedNote, note]); // Guarda el texto en el estado final
      setNote(""); // Limpia el input
    }
  };
  // Función que agrega una nueva nota por el boton
  const ButtonAddNote = () => {
    if (note.trim() === "") {
      alert("⚠️ Escribe una nota antes de agregar.");
      return;
    }
    setSubmittedNote([...submittedNote, note]); // Guarda el texto en el estado final
    setNote(""); // Limpia el input
  };
  // Función que elimina una tarea
  const ButtonDeleteNote = () => {
    if (submittedNote.length === 0) {
      alert("⚠️ Escribe una nota antes de eliminar.");
    } else {
      const newNote = submittedNote.slice(0, -1); // Eliminar el último elemento del array
      setSubmittedNote(newNote); // Actualizar el estado
    }
  };
  // Función para eliminar una tarea completada
  const removeCompletedNote = (index) => {
    const updatedNotes = submittedNote.filter((_, i) => i !== index); // Filtrar la tarea eliminada
    setSubmittedNote(updatedNotes); // Actualizar el estado
  };
  return (
    <div>
      <h1>Notes App</h1>
      <p>This is a simple notes app using React and Vite.</p>
      <input
        type="text"
        placeholder="New note"
        value={note}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {/* Aquí va la lista de notas */}
      <NoteList
        note={submittedNote}
        removeCompletedNote={removeCompletedNote}
      />
      <button onClick={ButtonAddNote}>Agregar Tarea</button>
      <button onClick={ButtonDeleteNote}>Eliminar tarea</button>
    </div>
  );
};

export default NotesApp;
