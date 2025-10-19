"use client"

import { useState } from "react"

interface GiftBoxProps {
  onOpen: () => void
}

export default function GiftBox({ onOpen }: GiftBoxProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    onOpen()
  }

  return (
    <div onClick={handleClick} className="cursor-pointer transform transition-all duration-500 hover:scale-110">
      <div
        className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${
          isOpen ? "animate-pulse-scale" : "animate-rotate-gentle"
        }`}
      >
        {/* Gift Box */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl flex items-center justify-center">
          <div className="text-6xl md:text-8xl">🎁</div>
        </div>

        {/* Ribbon */}
        {!isOpen && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-yellow-300 opacity-80"></div>
        )}

        {/* Bow */}
        {!isOpen && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-yellow-300 rounded-full opacity-80"></div>
        )}
      </div>

      {!isOpen && <p className="text-center mt-6 text-white font-semibold text-lg animate-bounce drop-shadow-lg">Click me!</p>}
    </div>
  )
}
