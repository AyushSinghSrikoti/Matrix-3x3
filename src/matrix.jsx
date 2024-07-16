import React, { useState } from 'react';

const Matrix = () => {
  const initialMatrix = Array(3).fill().map(() => Array(3).fill('bg-white'));
  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] === 'bg-white') {
      const newMatrix = matrix.map((r, rowIndex) =>
        r.map((c, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return 'bg-green-500';
          }
          return c;
        })
      );

      const newClickSequence = [...clickSequence, [row, col]];
      setMatrix(newMatrix);
      setClickSequence(newClickSequence);

      if (newClickSequence.length === 9) {
        changeColorsInSequence(newClickSequence);
      }
    }
  };

  const changeColorsInSequence = (sequence) => {
    sequence.forEach((coord, index) => {
      setTimeout(() => {
        setMatrix((prevMatrix) =>
          prevMatrix.map((row, rowIndex) =>
            row.map((col, colIndex) => {
              if (rowIndex === coord[0] && colIndex === coord[1]) {
                return 'bg-orange-500';
              }
              return col;
            })
          )
        );
      }, index * 500);
    });
  };

  const resetMatrix = () => {
    setMatrix(initialMatrix);
    setClickSequence([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">3x3 Color Matrix</h1>
      <div className="inline-block border-2 border-black p-2 rounded-lg shadow-lg mb-4">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((col, colIndex) => (
              <div
                key={colIndex}
                onClick={() => handleClick(rowIndex, colIndex)}
                className={`w-24 h-24 border border-black ${col} cursor-pointer transition-colors shadow-md m-1`}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={resetMatrix}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default Matrix;
