import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, addNote, updateNote, deleteNote } from '../utils/localStorage';

const Home = () => {
  const [notes, setNotes] = useState(getNotes());
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = (note) => {
    addNote(note);
    setNotes(getNotes());
  };

  const handleUpdateNote = (note) => {
    updateNote(note);
    setNotes(getNotes());
    setEditingNote(null);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  return (
    <div className="space-y-4">
      <NoteForm onAddNote={handleAddNote} onUpdateNote={handleUpdateNote} editingNote={editingNote} />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDeleteNote} />
    </div>
  );
};

export default Home;
