"use client"

import { useState } from "react"
import { X } from "lucide-react"

const GALLERY_IMAGES = [
  {
    url: "/gallery/IMG-20251112-WA0002.jpg",
    alt: "Gallery photo 1",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0003.jpg",
    alt: "Gallery photo 2",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0004.jpg",
    alt: "Gallery photo 3",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0005.jpg",
    alt: "Gallery photo 4",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0006.jpg",
    alt: "Gallery photo 5",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0007.jpg",
    alt: "Gallery photo 6",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0008.jpg",
    alt: "Gallery photo 7",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0009.jpg",
    alt: "Gallery photo 8",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0010.jpg",
    alt: "Gallery photo 9",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0011.jpg",
    alt: "Gallery photo 10",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0012.jpg",
    alt: "Gallery photo 11",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0013.jpg",
    alt: "Gallery photo 12",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0015.jpg",
    alt: "Gallery photo 13",
    category: "Church",
  },
  {
    url: "/gallery/IMG-20251112-WA0016.jpg",
    alt: "Gallery photo 14",
    category: "Church",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative overflow-hidden rounded-lg h-64 md:h-72 group cursor-pointer"
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                {image.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-screen flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg object-cover max-h-[80vh]"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </>
  )
}
