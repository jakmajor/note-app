import React from "react";
import Note from "./Note";

function Home({notes}) {
    return (
        <div>
            <h2>Home!</h2>
            <p>No errors</p>
            {notes.map(note => <Note note={note}/>)}
        </div>
    )
}

export default Home;

// [...this.props.myList].reverse().map(createListItem, this) shows newest note
