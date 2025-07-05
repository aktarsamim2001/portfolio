"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import SkillCard from "@/components/skill-card"
import ScrollToTop from "@/components/scroll-to-top"

const skills = [
  {
    category: "Frontend",
    icon: Palette,
    skills: ["React", "Redux", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    icon: Code,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Tools & Others",
    icon: Zap,
    skills: ["Git", "Docker", "AWS", "Figma", "Vercel","Postman"],
    color: "from-purple-500 to-pink-500",
  },
]

const experience = [
  {
    title: "Trainee Frontend Developer",
    company: "Notebrains Software and Services Pvt. Ltd",
    period: "9th December 2024 - 9th February 2025",
    description:
      "Completed training in HTML, CSS, and JavaScript. Assisted in building small website components and fixing bugs under supervision.",
  },
  {
    title: "Junior Frontend Developer",
    company: "Notebrains Software and Services Pvt. Ltd",
    period: "9th February 2025 - Present",
    description:
      "Building responsive web pages with React and Tailwind CSS. Working closely with the design team and backend developers to deliver user-friendly interfaces.",
  },
  {
    title: "Exploring Full Stack Development",
    company: "Self-Learning & Freelance",
    period: "2025 - Present",
    description:
      "Enhancing skills in backend development with Node.js and MongoDB. Working on personal projects to understand API development, deployment, and database design.",
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <ScrollToTop />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="About Me"
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
          />
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered
            digital experiences. When I'm not coding, you'll find me exploring new technologies or enjoying a good cup
            of coffee.
          </motion.p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My journey into web development started during college when I built my first website. What began as
                curiosity quickly turned into passion as I discovered the power of code to bring ideas to life.
              </p>
              <p>
                Over the years, I've had the privilege of working with amazing teams and clients, building everything
                from simple landing pages to complex web applications. I believe in writing clean, maintainable code and
                creating user experiences that make a difference.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Coffee, text: "Coffee Enthusiast" },
                { icon: Code, text: "Open Source Contributor" },
                { icon: Users, text: "Team Player" },
                { icon: Award, text: "Problem Solver" },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.prod.website-files.com/5f348cefc28f736422d5b00d/64e3031d672be000ea939dfe_img-feature-graphic-design-portfolio-website.jpeg"
                alt="About me"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <SkillCard key={skillGroup.category} {...skillGroup} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative pl-8 pb-8 border-l-2 border-purple-200 dark:border-purple-800 last:border-l-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full" />
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <div className="text-purple-600 font-medium mb-2">
                    {exp.company} • {exp.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
