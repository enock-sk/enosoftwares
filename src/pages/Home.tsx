import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enosoftwares - Premier IT Services in Bomet</title>
        <meta
          name="description"
          content="Enosoftwares provides web development, mobile apps, and IT support in Bomet. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="IT services Bomet, Enosoftwares, web development, app development"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Enosoftwares",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bomet",
                "addressCountry": "KE"
              },
              "telephone": "+254-123-456-789",
              "url": "https://enosoftwares.com"
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
    </>
  );
};

export default Home;
