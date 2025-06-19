"use client"

import { motion } from "framer-motion"
import { Filter } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ProjectCard from "@/components/project-card"
import ScrollToTop from "@/components/scroll-to-top"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?semt=ais_hybrid&w=740",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design.",
    image: "https://itseeze.com/_webedit/cached-images/3214-0-792-1736-8416-6312-1132.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "A headless CMS for blog management with markdown support, SEO optimization, and admin dashboard.",
    image: "https://itseeze.com/_webedit/cached-images/3214-0-792-1736-8416-6312-1132.png",
    technologies: ["Next.js", "Sanity", "GraphQL", "Vercel"],
    category: "Full Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations, dark mode, and optimized performance.",
    image: "https://itseeze.com/_webedit/cached-images/3214-0-792-1736-8416-6312-1132.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 6,
    title: "API Gateway",
    description: "A scalable API gateway with authentication, rate limiting, and monitoring capabilities.",
    image: "https://itseeze.com/_webedit/cached-images/3214-0-792-1736-8416-6312-1132.png",
    technologies: ["Node.js", "Express", "Redis", "Docker", "AWS"],
    category: "Backend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
]

const categories = ["All", "Frontend", "Backend", "Full Stack"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <div className="min-h-screen py-20 px-4">
      <ScrollToTop />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="My Projects"
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Here's a collection of projects I've worked on, showcasing my skills in web development, design, and
            problem-solving.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Filter className="h-5 w-5 text-gray-500 mt-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {selectedCategory === "All" && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} featured={true} />
                ))}
            </div>
          </motion.div>
        )}

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured={false} />
            ))}
          </div>

          {/* Show More Button */}
          {filteredProjects.length > 4 && !showAll && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
              >
                Show More Projects
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20 p-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Have a Project in Mind?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something
            incredible together!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            asChild
          >
            <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Get In Touch
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
