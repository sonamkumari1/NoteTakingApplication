import React from 'react';

const Pagination = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-1">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-100 rounded-md"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
