import React from "react";
import {useState, useEffect} from "react";

function NewNoteForm({createNewNote}) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  return (
    <form onSubmit={(e) => createNewNote(e, {title: title, author: author, content: content, tags: tags})}>
      <input onChange={(e) => setTitle(e.target.value)} text="text" placeholder="title" />
      <input onChange={(e) => setAuthor(e.target.value)} text="text" placeholder="author" />
      <textarea onChange={(e) => setContent(e.target.value)} text="text" placeholder="Content" rows={10} />
      <input onChange={(e) => setTags(e.target.value)} text="text" placeholder="tags"/>
      <input type="submit" />
    </form>
  );
}

export default NewNoteForm;
