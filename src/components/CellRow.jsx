import React, { memo, useContext } from 'react';
import Cell from "./Cell.jsx";
import AppContext from '../context/AppContext.jsx';


const CellRow =({onStop, setIsMoveable}) => {
  const myContext = useContext(AppContext)
  return (
    [...Array(myContext.committedFieldsToAdd.current)].map(
        (value, index) => (
          <td key={index}><Cell  onStop={onStop} setIsMoveable={setIsMoveable}/></td>
        )
      )

  )
}

export default CellRow