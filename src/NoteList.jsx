import React, { useEffect, useState } from "react";

const NoteList = ({ note, removeCompletedNote }) => {
  const [listNotes, setlistNotes] = useState([]);
  // Actualiza el estado solo cuando 'note' cambie
  useEffect(() => {
    if (Array.isArray(note)) {
      setlistNotes(note);
    } else {
      setlistNotes([]); // Previene errores si task no es un array
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
      {listNotes?.map((t, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <li>{t}</li>
          <span>date</span>
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
