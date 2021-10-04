import React from "react";
import {useState, useEffect} from "react";

function NewNoteForm(onAddNote) {





function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8004/XXXXXXXXXXXXXXXXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        content: content,
        tags: tags
      }),
    })
      .then(r => r.json())
      .then(newNote => onAddNote(newNote));
  }}

  export default NewNoteForm;
