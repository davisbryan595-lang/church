import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery - New Mt Calvary MBC",
  description: "Gallery of photos and images from New Mt Calvary Missionary Baptist Church",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Church Gallery</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Moments of worship, fellowship, and community service at New Mt Calvary MBC
            </p>
          </div>

          <GalleryGrid />
        </div>
      </main>

      <Footer />
    </div>
  )
}
