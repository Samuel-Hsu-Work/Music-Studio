import React, { useState } from 'react';

const GridCell = ({ content }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center border border-gray-300 text-white">
      {content}
    </div>
  );
};

const Grid = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {data.map((item, index) => (
        <GridCell key={index} content={item} />
      ))}
    </div>
  );
};

const Scales = () => {
  const [notesSet, setNotesSet] = useState([]);
  const [frequencies, setFrequencies] = useState([]);

  const noteSets = {
    set1: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    set2: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  };

  const calculateFrequencies = (firstNoteFrequency, selectedIndices) => {
    const allFrequencies = ['C', 'C# / Db', 'D', 'D# / Eb', 'E', 'F', 'F# / Gb', 'G', 'G# / Ab', 'A', 'A# / Bb', 'B'].map((note, index) => {
      const halfSteps = index;
      return firstNoteFrequency * Math.pow(2, halfSteps / 12);
    });

    const selectedFrequencies = selectedIndices.map(index => allFrequencies[index]);
    return selectedFrequencies;
  };

  const handleNotesSet1 = () => {
    setNotesSet(noteSets.set1);
    setFrequencies(calculateFrequencies(261.63, [0, 2, 4, 5, 7, 9, 11]));
  };

  const handleNotesSet2 = () => {
    setNotesSet(noteSets.set2);
    setFrequencies(calculateFrequencies(293.66, [0, 2, 4, 5, 7, 9, 11]));
  };

  return (
    <div>
      <div className="App text-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Musical Scales</h1>
        <div className="mb-4">
          <button onClick={handleNotesSet1} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 mr-4">
            C Major Scale
          </button>
          <button onClick={handleNotesSet2} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
            D Major Scale
          </button>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="font-bold text-lg mb-2 text-white">Musical Notes</h2>
            <Grid data={notesSet} />
          </div>
          <div className="ml-8">
            <h2 className="font-bold text-lg mb-2 text-white">Notes Frequencies</h2>
            <Grid data={frequencies.map(freq => freq.toFixed(2) + ' Hz')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scales