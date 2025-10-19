"use client"

import { useState, useEffect } from "react"
import FloatingHearts from "@/components/floating-hearts"
import GiftBox from "@/components/gift-box"
import LoveStory from "@/components/love-story"
import QuotesSection from "@/components/quotes-section"
import PhotosSection from "@/components/photos-section"
import ChatBot from "@/components/chat-bot"

export default function Home() {
  const [showMessage, setShowMessage] = useState(false)

  // Ensure page starts from top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-red-700 relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-red-600/20 animate-pulse"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      <FloatingHearts />

      {/* Landing Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance drop-shadow-lg">
            Welcome!
            <br />
            <span className="text-pink-200 animate-pulse">My Dear!</span>
          </h1>

          <div className="flex justify-center">
            <GiftBox onOpen={() => setShowMessage(true)} />
          </div>

          {showMessage && (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md mx-auto border-2 border-pink-300 animate-glow-pulse">
                <p className="text-2xl font-semibold text-red-600 text-balance">Happy Birthday To You Fruity</p>
                <p className="text-4xl mt-4 animate-bounce">❤️</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Love Story Section */}
      <LoveStory />

      {/* Interactive Components Section */}
      <section className="py-20 px-4 space-y-20">
        <QuotesSection />
        <PhotosSection />
        <ChatBot />
      </section>

      {/* Footer Message */}
      <section className="py-10 px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white animate-pulse">
          Hope we will together forever 🥺
        </h3>
      </section>
    </main>
  )
}
