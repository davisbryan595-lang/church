"use client"

import { useEffect, useState } from "react"

const SLOGANS = [
  "We're in this thing together",
  "Praise, Worship and Teaching God's Word",
  "Where Faith Meets Community",
  "Growing Stronger in Christ",
  "Serving with Love and Grace",
]

export function SloganSlider() {
  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % SLOGANS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden bg-gradient-to-r from-primary via-accent to-primary py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">
          <div className="relative w-full h-full flex items-center justify-center">
            {SLOGANS.map((slogan, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out ${
                  index === currentSlogan
                    ? "opacity-100 translate-y-0"
                    : index < currentSlogan
                      ? "opacity-0 translate-y-4"
                      : "opacity-0 -translate-y-4"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center italic">"{slogan}"</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex gap-2 justify-center mt-4">
          {SLOGANS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlogan(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlogan ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
