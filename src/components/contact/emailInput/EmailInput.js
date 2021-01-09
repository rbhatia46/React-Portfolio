import React from 'react';

const EmailInput = ({ handleInputChange })=>{
  return(
    <input 
    placeholder= "Enter Email Here" 
    name= 'email' 
    onChange= {handleInputChange} 
    />
  )
}

export default EmailInput;