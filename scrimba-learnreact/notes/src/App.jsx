import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {

  const localStorageLoad = () => JSON.parse(localStorage.getItem("notes")) || []

  const [notes, setNotes] = React.useState(localStorageLoad)
  const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "")

  const localStorageSave = React.useEffect(
    () => localStorage.setItem("notes", JSON.stringify(notes)), [notes]
  )



  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  // function updateNote(text) {
  //   setNotes(oldNotes => oldNotes.map(oldNote => {
  //     return oldNote.id === currentNoteId
  //       ? { ...oldNote, body: text }
  //       : oldNote
  //   }))
  // }

  function updateNote(text) {

    setNotes(oldNotes => {
      const updatedNotes = []
      oldNotes.map(oldNote => {
        if (oldNote.id === currentNoteId)
          updatedNotes.unshift({ ...oldNote, body: text })
        else
          updatedNotes.push(oldNote)
      })
      return updatedNotes
    })
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  function deleteNote(event, noteId) {
    event.stopPropagation()
    const updatedNotes = notes.filter(oldNote => oldNote.id !== noteId)
    setNotes(updatedNotes)
  }



  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
