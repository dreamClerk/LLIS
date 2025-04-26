"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import DoodleBackground from "./ui-elements/doodle-background"
import DoodleButton from "./ui-elements/doodle-button"
import { Star, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side to prevent hydration mismatch
  }

  return (
    <DoodleBackground className="pt-20 pb-16 md:pt-32 md:pb-24" density="high">
      {/* Additional floating doodles */}
      <motion.div
        className="absolute top-20 left-[10%] opacity-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.2,
          y: [0, -15, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Star className="h-16 w-16 text-[#10B84A]" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-[5%] opacity-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.2,
          y: [0, 15, 0],
          rotate: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Sparkles className="h-16 w-16 text-[#8B5CF6]" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[15%] opacity-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.2,
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Zap className="h-14 w-14 text-[#EC4899]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center border-2 border-black px-4 py-2 rounded-full mb-6">
              <span className="font-medium">Revolutionizing Student Data</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
              Earn From Your College Experience with AI-Powered Insights
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Share your daily college life, earn rewards, and contribute to the future of AI-driven education.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/how-it-works">
                <DoodleButton size="lg" variant="primary" className="group">
                  Learn More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </DoodleButton>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: "📚", text: "Real Student Experiences" },
                { icon: "🧠", text: "AI-Powered Insights" },
                { icon: "👥", text: "Growing Community" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-3 bg-white border-2 border-black rounded-lg"
                >
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[550px]">
              <div className="absolute inset-0 bg-white border-2 border-black rounded-2xl overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px]">
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      className="w-40 h-40 mx-auto bg-white border-2 border-black rounded-full flex items-center justify-center"
                    >
                      <span className="text-4xl">🎓</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DoodleBackground>
  )
}
