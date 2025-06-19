"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Award, Users, Code2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import ParticleBackground from "@/components/particle-background"
import ScrollToTop from "@/components/scroll-to-top"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AchievementBadges from "@/components/achievement-badges"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-8 lg:space-y-12" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-full border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Available for new opportunities
              </span>
            </motion.div>

            <div className="space-y-6">
              <AnimatedText
                text="Samim Aktar"
                className="text-5xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight"
              />
              <AnimatedText
                text="Junior React Stack Developer"
                className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-600 dark:text-blue-400"
                delay={0.3}
              />
            </div>

            <motion.p
              className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I architect and build exceptional digital experiences that drive business growth. With 1.5 years of
              expertise in React, Next.js, and scalable web applications, I transform complex ideas into elegant
              solutions.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 lg:gap-6" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <motion.a href="/projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  View My Work
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-lg font-semibold transition-all duration-300"
                asChild
              >
                <motion.a href="/resume.pdf" download whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                </motion.a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-6 pt-8" variants={itemVariants}>
              {[
                {
                  icon: Github,
                  href: "https://github.com",
                  label: "GitHub",
                  color: "hover:text-slate-900 dark:hover:text-white",
                },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
                { icon: Mail, href: "mailto:alex@example.com", label: "Email", color: "hover:text-indigo-600" },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 transition-all duration-300 ${color}`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Section */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="relative w-96 h-96 mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/20 dark:border-slate-800/20 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
                  alt="Alex Johnson - Senior Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                variants={floatingVariants}
                animate="animate"
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <Code2 className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 2 }}
              >
                <Zap className="h-5 w-5 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievement Badges */}
      <AchievementBadges />

      {/* Stats Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "100+", label: "Projects Delivered", icon: Code2 },
              { number: "5+", label: "Years Experience", icon: Award },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "99%", label: "Client Satisfaction", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 lg:p-10 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-blue-950/30 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's collaborate to transform your vision into a powerful digital solution that drives results and exceeds
            expectations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Start a Conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
