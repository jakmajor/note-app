import {Route, Switch} from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';
import NavBar from './NavBar';
import Home from "./Home";
import NewNoteForm from './NewNoteForm';
import Search from "./Search";
import Saved from "./Saved";
import NoteContainer from "./NoteContainer";

function App() { 
  // jak style :D
  const FETCH_URL = "http://localhost:4000/notes"
  // json-server --watch db.json --port=4000
  const [selectedTech, setSelectedTech] = useState("all")

  
  
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes(); 
  }, []) 
  
  const getNotes = () => {
    fetch(FETCH_URL)
    .then(r => r.json())
    .then(json => setNotes(json))
  }
  

  // creating new notes :D
  const createNewNote = (e, newNoteData) => {
    e.preventDefault();
    fetch(FETCH_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title": newNoteData.title,
        "author": newNoteData.author,
        "content": newNoteData.content,
        "tags": newNoteData.tags
        
      })
    }).then(() => getNotes)
    e.target.reset()
  }
  
  function handleTagChange(e){
      setSelectedTech(e.target.value);
      }
  //pas notes into
      const notesToDisplay = notes.filter(note => {
      if(selectedTech === "all") return true;

      return note.tag === selectedTech
      
    })
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/NewNoteForm">
          <NewNoteForm handleTagChange={handleTagChange} createNewNote={createNewNote} />
        </Route>
        <Route exact path="/Search">
          <Search />
        </Route>
        <Route exact path="/Saved">
          <Saved />
        </Route>
        <Route exact path="/">
          <Home notes={notes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// "id": 1,
// "title": "The Song About the Song",
// "content": "This ithe songs about the show!",
// "author": "Bryan Higgins",
// "tags": []


// switch syntax
// function App() {
//   return( 
  
//   <div>
// <NavBar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/actors">
//           <Actors />
//         </Route>
//         <Route path="/directors">
//           <Directors />
//         </Route>
//         <Route path="/movies">
//           <Movies />
//         </Route>
//       </Switch>


//   </div>
//   )
// }


