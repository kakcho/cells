import {useRef } from "react";
import React from "react";

const Cell = ({ onStop}) => {
  const value = useRef()
  const handleChange = (e) => {
    value.current = e.currentTarget.value
    onStop()
  }

  return (

    <input
      className={`bg-cell  border-cell-border border-2 border-solid  text-center text-white w-10vh h-10vh focus:bg-cell-blur ${
        value ? "focus:bg-cell-blur-value" : "focus:bg-cell-blur"
      }`}
      value={value.current}
      onChange={handleChange}
      onMouseUp={onStop}
    ></input>
  );
};

export default Cell;
