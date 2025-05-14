import { Helmet } from "react-helmet";
import Services from "../components/Services";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Enosoftwares IT Solutions in Bomet</title>
        <meta
          name="description"
          content="Explore Enosoftwares’ IT services, including web development, mobile apps, and IT support in Bomet."
        />
        <meta
          name="keywords"
          content="IT services Bomet, Enosoftwares services, web development"
        />
      </Helmet>
      <Services />
    </>
  );
};

export default ServicesPage;
