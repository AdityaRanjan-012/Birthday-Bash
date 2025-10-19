"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  user: string
  text: string
  timestamp: Date
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "System",
      text: "Welcome to the Birthday Chat! Everyone can join and chat here.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [userName, setUserName] = useState("")
  const [isJoined, setIsJoined] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (userName.trim()) {
      setIsJoined(true)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          user: "System",
          text: `${userName} joined the chat!`,
          timestamp: new Date(),
        },
      ])
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && isJoined) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          user: userName,
          text: inputValue,
          timestamp: new Date(),
        },
      ])
      setInputValue("")
    }
  }

  const onlineUsers = new Set(messages.map((m) => m.user)).size - 1 // Exclude System

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Birthday Chat</h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col h-96 border border-pink-300/30">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Live Chat</h3>
            <span className="text-sm">Online: {onlineUsers}</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.user === "System" ? "justify-center" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.user === "System"
                      ? "bg-gray-200 text-gray-600 text-sm italic"
                      : msg.user === userName
                        ? "bg-pink-600 text-white"
                        : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {msg.user !== "System" && <p className="text-xs font-semibold mb-1">{msg.user}</p>}
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {!isJoined ? (
            <form onSubmit={handleJoin} className="border-t p-4 space-y-2">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name to join"
                className="w-full px-4 py-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Join Chat
              </button>
            </form>
          ) : (
            <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
