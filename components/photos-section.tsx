"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function PhotosSection() {
  const [email, setEmail] = useState("")
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [imgSize, setImgSize] = useState(300) // default image size in px

  // ✅ Authorized email list
  const authorizedEmails = ["ranjanadi012@gmail.com"]

  // ✅ All 6 image paths (from your public/images folder)
  const photos = [
    "/images/IMG_20220908_103421_554.jpg",
    "/images/IMG-20231009-WA0005.jpg",
    "/images/IMG20231221124407.jpg",
    "/images/IMG20230329130704.jpg",
    "/images/IMG20231201115708.jpg",
    "/images/IMG20250724105507.jpg",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (authorizedEmails.includes(email.trim().toLowerCase())) {
      setIsAuthorized(true)
      setShowForm(false)
    } else {
      alert("Access Denied. You are not authorized to view these photos.")
      setEmail("")
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white px-4">
          Our Memories
        </h2>

        {/* Form Section */}
        {showForm ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 max-w-md mx-auto border border-pink-300/30 mx-4">
            <p className="text-center text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Enter your email to access our photo gallery
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Access Gallery
              </button>
            </form>
          </div>
        ) : isAuthorized ? (
          /* ✅ Show real photos here */
          <div>
            {/* Buttons to resize images */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 px-4">
              <button
                onClick={() => setImgSize((prev) => prev + 50)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
              >
                Increase Size
              </button>
              <button
                onClick={() => setImgSize((prev) => Math.max(prev - 50, 100))}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base"
              >
                Decrease Size
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {photos.map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-gradient-to-br from-pink-200 to-red-200 mx-auto"
                  style={{ 
                    width: `${imgSize}px`, 
                    height: `${imgSize}px` 
                  }}
                >
                  <Image
                    src={src}
                    alt={`Photo ${i + 1}`}
                    width={imgSize}
                    height={imgSize}
                    className="object-cover w-full h-full"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Access denied message */
          <div className="bg-red-100/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-red-300/30">
            <p className="text-xl font-semibold text-red-600">Access Denied</p>
            <p className="text-gray-700 mt-2">
              You are not authorized to view these photos.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
