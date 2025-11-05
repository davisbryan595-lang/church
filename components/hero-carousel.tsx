"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const HERO_IMAGES = [
  {
    url: "/serene-church-interior-prayer.jpg",
    alt: "Church interior with prayer",
  },
  {
    url: "/faith-spiritual-worship-congregation.jpg",
    alt: "Congregation worshipping together",
  },
  {
    url: "/mississippi-lake-sunrise-peaceful.jpg",
    alt: "Mississippi lake at sunrise",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      {/* Carousel Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Left Arrow */}
      <Button
        onClick={handlePrev}
        variant="ghost"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>

      {/* Right Arrow */}
      <Button
        onClick={handleNext}
        variant="ghost"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
