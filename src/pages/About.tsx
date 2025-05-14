import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Enosoftwares - IT Experts in Bomet</title>
        <meta
          name="description"
          content="Learn about Enosoftwares, your trusted IT partner in Bomet, delivering innovative web and mobile solutions."
        />
        <meta
          name="keywords"
          content="about Enosoftwares, IT company Bomet, web development"
        />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-8"
          >
            About Enosoftwares
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 mb-4"
          >
            Enosoftwares is a premier IT company based in Bomet, Kenya,
            dedicated to empowering businesses with innovative technology
            solutions. From custom websites to mobile apps and reliable IT
            support, we help our clients thrive in the digital age.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-gray-600"
          >
            Founded with a passion for technology and a commitment to our local
            community, we combine global expertise with a deep understanding of
            Bomet’s unique needs. Let’s build the future together!
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default About;
