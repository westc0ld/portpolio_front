// ContactForm.js

import React from 'react';

const ContactForm = () => {
  return (
    <div className='contactform'>
      <div className="head">Contact</div>
      <div className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Send</button>
      </div>
    </div>
  );
};

export default ContactForm;
