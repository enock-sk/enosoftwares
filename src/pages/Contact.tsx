import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Enosoftwares - IT Services in Bomet</title>
        <meta
          name="description"
          content="Contact Enosoftwares for web development, mobile apps, and IT support in Bomet. Get a free consultation!"
        />
        <meta
          name="keywords"
          content="contact Enosoftwares, IT services Bomet, web development"
        />
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
