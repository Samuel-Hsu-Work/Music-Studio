
import React, { useState } from 'react';



const GridCell = ({ note }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center border border-gray-300">
      {note}
    </div>
  );
};

const Grid = ({ notes }) => {
  return (
    <div className="flex flex-wrap gap-4 text-white">
      {notes.map((note, index) => (
        <GridCell key={index} note={note} />
      ))}
    </div>
  );
};

const Theory = () => {
  const [showNotes, setShowNotes] = useState(false);
  const musicalNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

  const handleButtonClick = () => {
    setShowNotes(!showNotes);
  };
  return (
    <div className="App text-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-white">Scales</h1>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
        {showNotes ? 'Hide' : 'C Major Scales'}
      </button>
      {showNotes && <Grid notes={musicalNotes} />}
    </div>
  )
}

export default Theory