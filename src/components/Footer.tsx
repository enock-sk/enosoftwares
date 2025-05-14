import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 Enosoftwares. All rights reserved.</p>
        <p className="mt-2">
          Bomet, Kenya | info@enosoftwares.com | +254-123-456-789
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:info@enosoftwares.com" className="hover:text-accent">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
