import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "../Firebase"



export default function App() {

  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState("")
  const [tempNoteText, setTempNoteText] = React.useState("")

  const currentNote =
    notes.find(note => note.id === currentNoteId)
    || notes[0]

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      // Sync up our local notes array with the snapshot data
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
        .sort((docA, docB) => docB.updatedAt - docA.updatedAt)

      setNotes(notesArr)
    })
    return unsubscribe
  }, [])

  // Set currentNoteId if unset
  React.useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id)
    }
  }, [notes])

  // Propagate any currentNote change to the Editor
  React.useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote.body)
    }
  }, [currentNote])

  // Debounce user input in the Editor
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body)
        updateNote(tempNoteText)
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [tempNoteText])



  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }

  function updateNote(text) {
    const docRef = doc(db, "notes", currentNoteId)
    setDoc(
      docRef, {
      body: text,
      updatedAt: Date.now()
    }, { merge: true })
  }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)
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
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            <Editor
              tempNoteText={tempNoteText}
              setTempNoteText={setTempNoteText}
            />
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
