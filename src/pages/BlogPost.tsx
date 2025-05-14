import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import React from "react";

interface BlogPost {
  title: string;
  content: string;
  image: string;
  date: string;
}

interface BlogPosts {
  [key: string]: BlogPost;
}

const blogPosts: BlogPosts = {
  "why-bomet-needs-websites": {
    title: "Why Bomet Businesses Need a Website in 2025",
    content:
      "In Bomet’s growing digital economy, a website is essential for businesses to reach customers, showcase products, and build credibility. At Enosoftwares, we create SEO-optimized, responsive websites tailored to your needs. Contact us today!",
    image: "https://via.placeholder.com/600", // Replace with /assets/web-dev-large.jpg
    date: "2025-05-07",
  },
  "mobile-apps-for-smes": {
    title: "Benefits of Mobile Apps for Kenyan SMEs",
    content:
      "Mobile apps streamline operations, engage customers, and boost revenue for SMEs in Kenya. Enosoftwares develops custom iOS and Android apps to help your business thrive. Get a free consultation now!",
    image: "https://via.placeholder.com/600", // Replace with /assets/mobile-app-large.jpg
    date: "2025-05-01",
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    setPost(
      blogPosts[slug!] || {
        title: "Post Not Found",
        content: "Sorry, this post does not exist.",
        image: "",
        date: "",
      }
    );
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Helmet>
        <title>{post.title} - Enosoftwares Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta
          name="keywords"
          content={`Enosoftwares, ${post.title}, IT blog Bomet`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${post.title}",
              "datePublished": "${post.date}",
              "publisher": {
                "@type": "Organization",
                "name": "Enosoftwares"
              }
            }
          `}
        </script>
      </Helmet>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold text-primary mb-4"
          >
            {post.title}
          </motion.h1>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
            loading="lazy"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600"
          >
            {post.content}
          </motion.p>
          <Link
            to="/contact"
            className="mt-4 inline-block bg-accent text-white py-2 px-4 rounded-lg hover:bg-green-600 transition flex items-center"
          >
            Get a Quote <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
