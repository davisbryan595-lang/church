"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const HERO_IMAGES = [
  { url: "/carousel/WhatsApp Image 2025-11-12 at 00.42.43_0e5bf94e.jpg", alt: "Carousel image 1" },
  { url: "/carousel/2.jpg", alt: "Carousel image 2" },
  { url: "/carousel/3.jpg", alt: "Carousel image 3" },
  { url: "https://cdn.builder.io/api/v1/image/assets/5c758e804cba4fa3a488e9088887877b/f4bbb2450103498fb2465dd675d5564a", alt: "Carousel image 4" },
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
    <div className="relative w-full h-[90vh] md:h-[95vh] lg:h-[calc(100vh-140px)] -mt-8 md:-mt-6 overflow-hidden group">
      {/* Carousel Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out transform ${index === currentIndex ? "opacity-100" : "opacity-0"} ${index > 0 && index !== 3 ? "translate-y-6 md:translate-y-12" : "translate-y-0"}`}
        >
          {index === 3 ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={encodeURI(image.url)}
                alt={image.alt}
                className="max-w-[85%] max-h-[85%] object-contain object-center"
                decoding="async"
              />
            </div>
          ) : (
            <img
              src={encodeURI(image.url)}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
              decoding="async"
            />
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 bg-blue-500/5" />

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
