"use client"

import { useState } from "react"

const quotes = [
  {
    text: "You are my today and Don't care about tomorrow. Just want to be with you forever.",
    author: "Fruity",
  },
  {
    text: "In your eyes, I found  sometimes everythings.",
    author: "Adi",
  },
  {
    text: "You make my heart beat faster when we meet.",
    author: "Adi",
  },
  {
    text: "Forever is not long enough to love you.",
    author: "Adi",
  },
  {
    text: "You are my greatest blessing and sometimes my sweetest dream.",
    author: "Adi",
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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white px-4">Quotes About You</h2>

        <div className="bg-gradient-to-br from-pink-200/20 to-red-200/20 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 min-h-64 flex flex-col justify-center items-center space-y-4 sm:space-y-6 border border-pink-300/30 mx-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-white text-balance px-2">
            "{quotes[currentQuote].text}"
          </p>
          <p className="text-base sm:text-lg text-pink-200 text-center px-2">— {quotes[currentQuote].author}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full px-4">
            <button
              onClick={prevQuote}
              className="px-4 sm:px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-sm sm:text-base"
            >
              Previous
            </button>
            <button
              onClick={nextQuote}
              className="px-4 sm:px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
