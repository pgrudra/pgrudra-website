"use client";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Your Name
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl"
        >
          Software Development Engineer
        </motion.p>
      </div>
    </section>
  )
}