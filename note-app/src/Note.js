import React from "react";

// delete note:
// 1. make a copy of the getNote function in App.js, put it in Note.js and call it deleteNote. It should still have the one parameter 'id'. so it will look like this? const deleteNote = (id) => {
// 2. above 'headers:' in the fetch function in deleteNote add:  method: 'DELETE',
// 3. now add a button to the component and give it: onClick={() => deleteNote(post.id)}
// 4. see if it works lol


function Note({ note, deleteNote }) {


    return (
        <div className="note-wrapper">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p className="tag">#{note.tags}</p>
            <button className="delete-button" onClick={() => deleteNote(note.id)}>remove</button>
        </div>
    )
}

export default Note;