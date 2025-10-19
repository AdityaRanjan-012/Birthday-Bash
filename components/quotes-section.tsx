"use client"

import { useState } from "react"

const quotes = [
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher",
  },
  {
    text: "In your eyes, I found my home.",
    author: "Unknown",
  },
  {
    text: "You make my heart skip a beat every single day.",
    author: "Unknown",
  },
  {
    text: "Forever is not long enough to love you.",
    author: "Unknown",
  },
  {
    text: "You are my greatest blessing and my sweetest dream come true.",
    author: "Unknown",
  },
]

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Romantic Quotes</h2>

        <div className="bg-gradient-to-br from-pink-200/20 to-red-200/20 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 min-h-64 flex flex-col justify-center items-center space-y-6 border border-pink-300/30">
          <p className="text-2xl md:text-3xl font-semibold text-center text-white text-balance">
            "{quotes[currentQuote].text}"
          </p>
          <p className="text-lg text-pink-200 text-center">— {quotes[currentQuote].author}</p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={prevQuote}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextQuote}
              className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
