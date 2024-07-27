import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">{note.title}</h2>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md"
            onClick={() => onEdit(note)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700">{note.content}</p>
      <p className="text-sm text-gray-500">{new Date(note.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default NoteItem;
