import React from "react";
import {useState, useEffect} from "react";



function NewNoteForm(onAddNote) {
    
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    
    
    

return (
    <form>
        <input type="text" placeholder="title" />

        <input type="text" placeholder="title" />

        <textarea type="text" placeholder="title" rows={10} />

        <input type="text" placeholder="title"/>

        <input type="submit" />

    </form>


)


}





  export default NewNoteForm;
