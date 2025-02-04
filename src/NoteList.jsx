import React, { useEffect, useState } from "react";

const NoteList = ({ note, removeCompletedNote }) => {
  const [listNotes, setlistNotes] = useState([]);
  // Actualiza el estado solo cuando 'note' cambie
  useEffect(() => {
    if (Array.isArray(note)) {
      // Transforma cada nota en un objeto con texto y fecha única
      const updatedNotes = note.map((text) => ({
        text,
        date: new Date().toISOString(), // Fecha única para cada nota
      }));
      setlistNotes(updatedNotes);
    } else {
      setlistNotes([]); // Previene errores si note no es un array
    }
  }, [note]);

  // Elimina una nota cuando se presiona el botón
  const ButtonRemoveNote = (index) => {
    removeCompletedNote(index);
    alert(`Nota ${index + 1} Eliminada`);
    console.log(listNotes);
  };
  return (
    <ol>
      {listNotes?.map((note, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <li>{note.text}</li>
          {/* Mostrar la fecha */}
          <span style={{ margin: "0 10px" }}>
            {new Date(note.date).toLocaleString()} {/* Formatea la fecha */}
          </span>
          <button
            className="delete-note-btn"
            onClick={() => ButtonRemoveNote(index)}
          >
            Delete note
          </button>
        </div>
      ))}
    </ol>
  );
};

export default NoteList;
