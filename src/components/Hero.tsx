import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-primary"
        >
          Empowering Bomet with Cutting-Edge IT Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg mt-4 text-gray-600"
        >
          Enosoftwares delivers web development, mobile apps, and IT support
          tailored to your needs.
        </motion.p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-accent text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default Hero;
