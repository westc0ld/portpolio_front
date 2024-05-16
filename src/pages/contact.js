// ContactPage.js

import React from 'react';
import ContactForm from '../components/contactform';
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
    <div className="container mx-auto py-8">
      <ContactForm />
    </div>
    </Layout>
  );
};

export default ContactPage;
