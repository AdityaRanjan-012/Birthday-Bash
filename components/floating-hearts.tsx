"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
  color: string
  type: 'heart' | 'sparkle' | 'star'
}

const heartTypes = ['❤️', '💖', '💕', '💗', '💝', '✨', '⭐', '💫']
const heartColors = ['text-red-400', 'text-pink-400', 'text-red-300', 'text-pink-300', 'text-rose-300']

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const newHearts: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      size: 2 + Math.random() * 2,
      opacity: 0.6 + Math.random() * 0.4,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      type: Math.random() > 0.7 ? 'sparkle' : 'heart'
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.color} animate-float-gentle`}
          style={{
            left: `${heart.left}%`,
            top: "-20px",
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity,
            animation: `float-gentle ${heart.duration}s ease-in-out infinite, sparkle-gentle 3s ease-in-out infinite, glow-pulse 4s ease-in-out infinite`,
            animationDelay: `${heart.delay}s, ${heart.delay}s, ${heart.delay + 1}s`,
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
          }}
        >
          {heart.type === 'sparkle' ? 
            (Math.random() > 0.5 ? '✨' : '⭐') : 
            heartTypes[Math.floor(Math.random() * heartTypes.length)]
          }
        </div>
      ))}
    </div>
  )
}
