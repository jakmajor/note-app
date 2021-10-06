import React, { useState } from "react";
import Note from "./Note";


function Search({ notes, deleteNote }) {
    const [selectedTech, setSelectedTech] = useState("all")

    const notesToDisplay = notes.filter(note => {
        if (selectedTech === "all") return true;

        return note.tags.toLowerCase() === selectedTech
    })

    return (
        <div>
            <select onChange={(e) => setSelectedTech(e.target.value)} name="tech" id="tech">
                <option value="all">All</option>
                <option value="react">React</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="ruby">Ruby</option>
                <option value="git">Git</option>
                <option value="rails">Rails</option>
            </select>
                <div className="note-in-search-list">
            {notesToDisplay.map(note =>
                <Note note={note} deleteNote={deleteNote} />
            )}
            </div>
        </div>
    )
}

export default Search;