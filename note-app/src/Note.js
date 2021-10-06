import React from "react";

function Note({ note }) {
    return (
        <div className="note-wrapper">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p className="tag">#{note.tags}</p>
        </div>
    )
}

export default Note;