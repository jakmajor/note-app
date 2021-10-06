import React from "react";
import Note from "./Note";

function Home({ notes, setSelectedNote }) {
    return (
        <div className="note-list">
            {notes.map(note =>
                <div onClick={() => setSelectedNote(note)}>
                    <Note note={note} />
                </div>
            )}
        </div>
    )
}

export default Home;
