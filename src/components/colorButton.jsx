import React from 'react';

function ColorButton({colorName,color,setColor}){

  return(
    <button onClick={()=> setColor(color)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}
        style={{backgroundColor:color}}
    >{colorName}</button>
  )
}

export default ColorButton
