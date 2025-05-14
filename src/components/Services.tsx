import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaTools } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Custom, responsive websites to grow your business online.",
      icon: <FaLaptopCode className="text-4xl text-accent mb-4" />,
    },
    {
      title: "Mobile Apps",
      description:
        "Innovative iOS and Android apps for seamless user experiences.",
      icon: <FaMobileAlt className="text-4xl text-accent mb-4" />,
    },
    {
      title: "IT Support",
      description:
        "Reliable technical support to keep your systems running smoothly.",
      icon: <FaTools className="text-4xl text-accent mb-4" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary mb-8"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
