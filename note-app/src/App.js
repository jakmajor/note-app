import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import NavBar from './NavBar';
import Home from "./Home";
import NewNoteForm from './NewNoteForm';
import Search from "./Search";
import Saved from "./Saved";
import NoteContainer from "./NoteContainer";
import Note from "./Note";

function App() {
  // jak style :D
  const FETCH_URL = "http://localhost:4000/notes"
  // json-server --watch db.json --port=4000
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState({ title: '', content: '' })

  useEffect(() => {
    getNotes();
  }, [])

  const getNotes = () => {
    fetch(FETCH_URL)
      .then(r => r.json())
      .then((json) => setNotesOnLoad(json.reverse()))
  }

  const setNotesOnLoad = (notes) => {
    setNotes(notes)
    setSelectedNote(notes[0])
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

  const deleteNote = (id) => {
  
    fetch(`${FETCH_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then(response => response.json())
        .then(() => getNotes()) 
    } 


  return (
    <div className="container">
      <div className="row marg-me-top-sm h-100">
        <div className="col my-auto">
          <h3 className="logo">{`<Notes/>`}</h3>
        </div>
        <div className="col-4">
          <NavBar />
        </div>
      </div>
      <div className="row marg-me-top">
        <div className="col">
          <Switch>
            <Route exact path="/NewNoteForm">
              <NewNoteForm createNewNote={createNewNote} />
            </Route>
            <Route exact path="/Search">
              <Search notes={notes} deleteNote={deleteNote} />
            </Route>
            <Route exact path="/">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Home notes={notes} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
                  </div>
                  <div className="col-8">
                    <div className="selected-note-wrapper">
                      <Note note={selectedNote} deleteNote={deleteNote} />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
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


