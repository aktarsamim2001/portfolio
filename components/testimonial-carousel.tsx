"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Inc.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjcvDs-o9lASRyQ_wawp5c6Edowb4O_NcqEshtVf7QPGoGLC7CPtqOSDykjEPVx4Mook&usqp=CAU",
    content:
      "Alex delivered exceptional results on our e-commerce platform. His attention to detail and technical expertise helped us increase conversion rates by 40%. Truly outstanding work.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "InnovateLab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbChTLjSsJTZkdJ-dJrl7mGWUE8ToeYLs39tiHCByZvSrA6uypyJ9j01IRUyGNbR2qjU&usqp=CAU",
    content:
      "Working with Alex was a game-changer for our startup. He transformed our complex requirements into an elegant, scalable solution. His communication and delivery were flawless.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder & CEO",
    company: "GrowthMetrics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx-wxle_unpBUp-PdatrfcHp3ljhBkIHdLeEmYmn6CYmJrpMAzOVfUxCu9CKX19zxsqA&usqp=CAU",
    content:
      "Alex's expertise in React and Next.js helped us build a robust analytics dashboard. The performance improvements were remarkable - 60% faster load times. Highly recommended!",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative z-10">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Don't just take my word for it - here's what industry leaders have to say about our collaborations.
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover border-4 border-white/50 dark:border-slate-700/50"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
