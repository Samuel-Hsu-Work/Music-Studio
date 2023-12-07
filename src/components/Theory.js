
import React, { useState } from 'react';



const GridCell = ({ note }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center border border-gray-300 text-white">
      {note}
    </div>
  );
};

const Grid = ({ notes }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {notes.map((note, index) => (
        <GridCell key={index} note={note} />
      ))}
    </div>
  );
};

const Theory = () => {
  const [notesSet, setNotesSet] = useState([]);
  const noteSets = {
    set1: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    set2: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
  };

  const handleNotesSet1 = () => {
    setNotesSet(noteSets.set1);
  };

  const handleNotesSet2 = () => {
    setNotesSet(noteSets.set2);
  };
  return (
    <div className="App text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Scale Notes</h1>
      <button onClick={handleNotesSet1} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 mr-4">
        C Major Scale
      </button>
      <button onClick={handleNotesSet2} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
        D Major Scale
      </button>
      <Grid notes={notesSet} />
    </div>
  )
}

export default Theory