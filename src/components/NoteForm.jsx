import React, { useState, useEffect } from 'react';

const NoteForm = ({ onAddNote, onUpdateNote, editingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { id: editingNote ? editingNote.id : Date.now(), title, content, timestamp: new Date() };
    if (editingNote) {
      onUpdateNote(note);
    } else {
      onAddNote(note);
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
