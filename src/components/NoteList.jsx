import React, { useState } from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';

const NoteList = ({ notes, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 3;
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="space-y-6">
      {currentNotes.length > 0 ? (
        <div className="space-y-4">
          {currentNotes.map((note) => (
            <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No notes available</div>
      )}
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default NoteList;
