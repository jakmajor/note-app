import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/NewNoteForm">New Note</NavLink>
            <NavLink className="nav-link" to="/Search">Search</NavLink>
            <NavLink className="nav-link" to="/Saved">Saved</NavLink>
        </div>
    );
}

export default NavBar;

// this isn't sandy typing, its steve lol