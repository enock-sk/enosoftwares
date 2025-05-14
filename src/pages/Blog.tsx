import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "why-bomet-needs-websites",
    title: "Why Bomet Businesses Need a Website in 2025",
    excerpt: "Boost your business in Bomet’s digital economy with a website.",
    image: "https://via.placeholder.com/300", // Replace with /assets/web-dev.jpg
    date: "2025-05-07",
  },
  {
    slug: "mobile-apps-for-smes",
    title: "Benefits of Mobile Apps for Kenyan SMEs",
    excerpt: "Streamline operations and engage customers with mobile apps.",
    image: "https://via.placeholder.com/300", // Replace with /assets/mobile-app.jpg
    date: "2025-05-01",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog: React.FC = () => {
  const [posts] = useState<BlogPost[]>(blogPosts);

  return (
    <>
      <Helmet>
        <title>Enosoftwares Blog - IT Insights for Bomet</title>
        <meta
          name="description"
          content="Read the latest IT insights from Enosoftwares, your trusted IT partner in Bomet."
        />
        <meta
          name="keywords"
          content="IT blog Bomet, Enosoftwares blog, web development tips"
        />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary text-center mb-8"
          >
            Enosoftwares Blog
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-primary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-accent hover:underline flex items-center"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
