import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Website",
      description: "Built a responsive online store for a Bomet retailer.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Mobile Banking App",
      description: "Developed a secure app for a local cooperative.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "School Management System",
      description: "Created a web app for a Bomet school.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary mb-8"
        >
          Our Portfolio
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href="/portfolio"
                  className="mt-4 inline-block text-accent hover:underline flex items-center"
                >
                  Learn More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
