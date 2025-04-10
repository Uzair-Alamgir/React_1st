import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12">
        <div className="flex flex-wrap justify-center px-3 py-2 bg-white rounded-full gap-3">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="px-4 rounded-full outline-none cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="px-4 rounded-full outline-none cursor-pointer text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="px-4 rounded-full outline-none cursor-pointer text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="px-4 rounded-full outline-none cursor-pointer"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
