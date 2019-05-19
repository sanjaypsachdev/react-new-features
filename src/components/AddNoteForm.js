import React, { useContext, useState } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    // setNotes([
    //   ...notes,
    //   { 
    //     title,
    //     body
    //   }
    // ])
    dispatch({ 
      type: 'ADD_NOTE', 
      title, 
      body 
    })
    setTitle('')
    setBody('')
  }

  return (
    <>
      <p>Add Note {position.x} - {position.y}</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
      </form>
    </>
  )
}

export { AddNoteForm as default }