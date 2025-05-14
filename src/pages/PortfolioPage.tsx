import { Helmet } from "react-helmet";
import Portfolio from "../components/Portfolio";
import React from "react";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Enosoftwares Projects in Bomet</title>
        <meta
          name="description"
          content="See Enosoftwares’ portfolio of web development, mobile apps, and IT projects in Bomet."
        />
        <meta
          name="keywords"
          content="Enosoftwares portfolio, IT projects Bomet, web development"
        />
      </Helmet>
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
