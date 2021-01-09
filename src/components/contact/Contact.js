import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import NameInput from './nameInput/NameInput';
import EmailInput from './emailInput/EmailInput';
import MessageInput from './messageInput/MessageInput';

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value
    })
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange= {handleInputChange} name="name" value={message.name} type="name" placeholder="Full Name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Company</Form.Label>
        <Form.Control onChange= {handleInputChange} type="name" name="company" value={message.company} placeholder="Company" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange= {handleInputChange} type="email" name="email" value={message.email} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control onChange= {handleInputChange} as="textarea" value={message.message} name="message" rows={10} />
      </Form.Group>
    </Form>
    // <div className= 'form'>
    //   <NameInput handleInputChange= {handleInputChange} />
    //   <EmailInput handleInputChange= {handleInputChange} />
    //   <MessageInput handleInputChange= {handleInputChange} />
    //   <button>Submit</button>
    // </div>
  )
}

export default Contact;