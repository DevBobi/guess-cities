import React from "react";

const Init = ({ start, setStart }) => {
  return (
      <div>
        <button
          onClick={() => setStart(!start)}
          className="hover:bg-transparent bg-red-600 text-white hover:text-red-600 px-5 py-3 rounded-full mt-4 border-2 border-solid border-red-600 duration-700"
        >
          Start The Game
        </button>
      </div>
  );
};

export default Init;
