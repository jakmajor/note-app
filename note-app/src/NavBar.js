import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/NewNoteForm">Note</NavLink>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/Saved">Saved</NavLink>
        </div>
    );
}

export default NavBar;

// this isn't sandy typing, its steve lol