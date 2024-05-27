import React, { Suspense, useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import CellRow from "./CellRow";
import AppContext from "../context/AppContext";

const Grid = ({onStop}) => {
  const myContext = useContext(AppContext)
  return (
        <div className="w-600 h-600 max-sm:w-450 max-sm:h-450  flex">
          <table className="grid overflow-visible  w-600 h-600 max-sm:w-450 max-sm:h-450 mx-auto place-content-center content-center">
            <tbody>
            {[...Array(myContext.committedFieldsToAdd.current)].map(
              (value, rowIndex) => (
                <tr key={rowIndex} className="flex flex-row">
                  <CellRow key={rowIndex}  onStop={onStop} />
                </tr>
              )
            )}</tbody>
          </table>
        </div>

  );
};

export default Grid;
