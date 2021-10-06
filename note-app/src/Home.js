import React from "react";
import Note from "./Note";

function Home({ notes, setSelectedNote, deleteNote }) {
    return (
        <div className="note-list">
            {notes.map(note =>
                <div onClick={() => setSelectedNote(note)}>
                    <Note note={note} deleteNote={deleteNote} />
                </div>
            )}
        </div>
    )
}

export default Home;
