import React from 'react';
import "./resetbutton.css";

export const Resetbutton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>Start another game</button>
  )
}
