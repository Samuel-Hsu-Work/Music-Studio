
import React, { useState } from 'react';



const GridCell = ({ content }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center border border-gray-300 text-white">
      {content}
    </div>
  );
};

const Grid = ({ notes }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {notes.map((note, index) => (
        <GridCell key={index} content={note} />
      ))}
    </div>
  );
};

const Theory = () => {
  const [notesSet, setNotesSet] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  
  const noteSets = {
    set1: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    set2: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
  };

  const calculateFrequencies = (notes) => {
    const referenceFrequency = 440; // A4 frequency
    const frequencies = notes.map((note, index) => {
      const halfSteps = index - 9;
      return referenceFrequency * Math.pow(2, halfSteps / 12);
    });
    return frequencies;
  };

  const handleNotesSet1 = () => {
    setNotesSet(noteSets.set1);
    setFrequencies(calculateFrequencies(noteSets.set1));
  };

  const handleNotesSet2 = () => {
    setNotesSet(noteSets.set2);
    setFrequencies(calculateFrequencies(noteSets.set2));
  };
  return (
    <div className="App text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Musical Notes Grids</h1>
      <div className="mb-4">
        <button onClick={handleNotesSet1} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 mr-4">
          Show Notes Set 1
        </button>
        <button onClick={handleNotesSet2} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
          Show Notes Set 2
        </button>
      </div>
      <div className="flex justify-center">
        <div>
          <h2 className="font-bold text-lg mb-2">Musical Notes</h2>
          <Grid notes={notesSet} />
        </div>
        <div className="ml-8">
          <h2 className="font-bold text-lg mb-2">Frequencies</h2>
          <Grid notes={frequencies.map(freq => freq.toFixed(2) + ' Hz')} />
        </div>
      </div>
    </div>
  )
}

export default Theory