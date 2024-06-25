"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-4">
            Hi, I&apos;m Prajwal Rudrakshi. I&apos;m a Software Developer based in India. 
          </p>
          <p className="text-lg mb-4">
            With 3 years of experience in Java, I&apos;ve worked on a variety of projects ranging from Spring Boot to Android.
          </p>
          <p className="text-lg">
            I like to go for jogging. I have a roadbike which I do want to ride, but laziness has taken over me in this regard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}