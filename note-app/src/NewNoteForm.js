import React from "react";
import { useState, useEffect } from "react";

function NewNoteForm({ createNewNote}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  function resetStates() {
    setTitle("");
    setAuthor("");
    setContent("");
    setTags("");

  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-7">
          <form className="new-note-form" onSubmit={(e) => createNewNote(e, { title: title, author: author, content: content, tags: tags })}>
            <input onChange={(e) => setTitle(e.target.value)} text="text" placeholder="title" />
            <input onChange={(e) => setAuthor(e.target.value)} text="text" placeholder="author" />
            <textarea onChange={(e) => setContent(e.target.value)} text="text" placeholder="content" rows={10} />
            <select onChange={(e) => setTags(e.target.value)} name="tech" id="tech">
              <option value="all">Add a tag</option>
              <option value="react">React</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="ruby">Ruby</option>
              <option value="git">Git</option>
              <option value="rails">Rails</option>
            </select>

            <input className="submit-button" value="Create" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewNoteForm;
