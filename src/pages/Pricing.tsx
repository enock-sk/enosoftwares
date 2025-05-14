import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import { FaArrowRight } from "react-icons/fa";

interface Package {
  name: string;
  price: string;
  features: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pricing: React.FC = () => {
  const packages: Package[] = [
    {
      name: "Basic",
      price: "$200",
      features: ["Static Website", "1 Month Support", "Basic SEO"],
    },
    {
      name: "Premium",
      price: "$500",
      features: [
        "Dynamic Website",
        "3 Months Support",
        "Advanced SEO",
        "Mobile Optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Custom Web/App Solution",
        "6 Months Support",
        "Full SEO & Analytics",
        "Dedicated Manager",
      ],
    },
  ];

  const handleClick = (label: string) => {
    ReactGA.event({ category: "Button", action: "Click", label });
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Enosoftwares IT Services in Bomet</title>
        <meta
          name="description"
          content="Explore Enosoftwares’ affordable IT service packages for web development, mobile apps, and IT support in Bomet."
        />
        <meta
          name="keywords"
          content="Enosoftwares pricing, IT services cost Bomet, web development pricing"
        />
      </Helmet>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-8"
          >
            Our Pricing Plans
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-primary">
                  {pkg.name}
                </h2>
                <p className="text-3xl font-bold text-accent mt-2">
                  {pkg.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  onClick={() => handleClick(`Get Started - ${pkg.name}`)}
                  className="mt-6 inline-block bg-accent text-white py-2 px-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
                >
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
