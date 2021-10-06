import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';
import Note from "./Note";


function Search({ notes }) {
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
            {notesToDisplay.map(note =>
                <Note note={note} />
            )}
        </div>
    )
}

export default Search;