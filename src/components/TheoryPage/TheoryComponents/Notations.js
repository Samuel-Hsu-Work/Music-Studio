import React from 'react';

const notations = [
  {
    name: 'Treble Clef',
    description: 'The treble clef, or G clef, is used for higher-pitched instruments and voices.',
  },
  {
    name: 'Bass Clef',
    description: 'The bass clef, or F clef, is used for lower-pitched instruments and voices.',
  },
  {
    name: 'Quarter Note',
    description: 'A quarter note represents one beat in 4/4 time.',
  },
  {
    name: 'Half Note',
    description: 'A half note represents two beats in 4/4 time.',
  }
];

const MusicNotationCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Music Notations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {notations.map((notation, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-center items-center mb-4 text-indigo-600">
                {notation.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">{notation.name}</h2>
              <p className="text-gray-600 text-sm text-center">{notation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicNotationCards;