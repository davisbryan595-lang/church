"use client"

import { useState } from "react"
import { X } from "lucide-react"

const GALLERY_IMAGES = [
  {
    url: "/church-congregation-singing-worship.jpg",
    alt: "Congregation singing in worship",
    category: "Worship",
  },
  {
    url: "/community-service-volunteering-mission.jpg",
    alt: "Community service and outreach",
    category: "Community",
  },
  {
    url: "/sunday-school-children-learning-faith.jpg",
    alt: "Sunday school and children's ministry",
    category: "Ministry",
  },
  {
    url: "/prayer-meeting-fellowship-church.jpg",
    alt: "Prayer meeting and fellowship",
    category: "Prayer",
  },
  {
    url: "/youth-group-gathering-young-adults.jpg",
    alt: "Youth group gathering",
    category: "Youth",
  },
  {
    url: "/special-events-celebration-church-gathering.jpg",
    alt: "Special events and celebrations",
    category: "Events",
  },
  {
    url: "/baptism-spiritual-milestone-water.jpg",
    alt: "Baptism and spiritual milestones",
    category: "Sacraments",
  },
  {
    url: "/church-interior-sanctuary-architecture.jpg",
    alt: "Church interior and sanctuary",
    category: "Facilities",
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
