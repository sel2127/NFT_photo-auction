import React from 'react'
import contactImage from '../assets/contact.jpg'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='left' style={{ backgroundImage:`url(${contactImage})` }}></div>
      <div className='right'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full name' type='text'/>
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter email' type='email'/>
            <label htmlFor='feedback'>Message</label>
            <textarea rows="6" placeholder="Enter your message" name="feedback" required></textarea>
            <Link to="/contactSubmit"><button type="submit">Send</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Contact
