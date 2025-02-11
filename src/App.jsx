import React, { useState } from "react";

const App = () => {

  const [color, setColor] = useState('red')

  const changeColor = (newColor) => {
    setColor(newColor)
  }

  return (
    <div className="w-full h-screen duration-200 bg-green-800" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button onClick={() => changeColor('green')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">green</button>
          <button onClick={() => changeColor('blue')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">blue </button>
        </div>
      </div>
    </div>
  );
};

export default App;
