import React from 'react';

const ContactForm = () => {
  return (
    <div className='contact_container'>
      <div className="contactform">
        <div className="head">Contact</div>
        <div className="input_container">
          <div className="contact_name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="contact_email">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="contact_message">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="contact_send">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
