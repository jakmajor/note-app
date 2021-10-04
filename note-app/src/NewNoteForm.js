import React from "react";
import {useState, useEffect} from "react";



function NewNoteForm(onAddNote) {
    
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")


  return (
      <form>
          <input type="text" name="title" placeholder="title" />

          <input type="text"name="author" placeholder="title" />

          <textarea type="text"name="content" placeholder="title" rows={10} />

          <input type="text"name="tags" placeholder="title"/>

          <input type="submit" />

      </form>


  )


}





export default NewNoteForm;
