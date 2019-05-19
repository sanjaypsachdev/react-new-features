import React, { useEffect, useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {

  const { dispatch } = useContext(NotesContext)
  const position = useMousePosition()

  const removeNote = (title) => {
    //setNotes(notes.filter((note) => note.title !== title))
    dispatch({ 
      type: 'REMOVE_NOTE', 
      title 
    })
  }

  useEffect(() => {
    console.log('Setting up effect!')

    return () => {
      console.log('Cleaning up effect!')
    }
  }, [])

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  )
};

export { Note as default };