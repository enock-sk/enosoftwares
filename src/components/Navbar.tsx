import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white p-4 sticky top-0 z-10 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          {/* Replace with <img src="/assets/logo.png" alt="Enosoftwares Logo" className="h-8" /> */}
          Enosoftwares
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        <ul
          className={`md:flex md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0`}
        >
          {[
            "/",
            "/about",
            "/services",
            "/portfolio",
            "/blog",
            "/pricing",
            "/contact",
          ].map((path, index) => (
            <motion.li
              key={path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-accent" : "hover:text-accent"
                }
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
