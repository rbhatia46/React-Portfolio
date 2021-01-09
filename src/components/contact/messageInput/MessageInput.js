import React from 'react';

const MessageInput = ({ handleInputChange })=>{
  return(
    <textarea 
    placeholder= "Enter Message Here" 
    name= 'message'
    onChange= {handleInputChange} 
    />
  )
}

export default MessageInput;