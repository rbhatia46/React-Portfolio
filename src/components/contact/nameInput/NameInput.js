import React from 'react';

const NameInput = ({ handleInputChange })=>{
  return(
    <input 
    placeholder= 'Enter Name Here'
    name= 'name'
    onChange= {handleInputChange} 
    />
  )
}

export default NameInput;