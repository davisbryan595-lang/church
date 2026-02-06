import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Facebook, Youtube, Twitter, Instagram, TikTok } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-12 text-center">Welcome to New Mt Calvary</h1>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert mb-16">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our History</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                New Mt Calvary Missionary Baptist Church is a cherished spiritual home in the heart of Lake, Scott
                County, Mississippi. For generations, our church has been a beacon of faith, serving as a sanctuary
                where families gather to praise God, worship in spirit, and study His Word.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Founded on principles of faith, community, and service, our small rural church has grown into a vibrant
                congregation that continues to impact lives through spiritual guidance and Christian fellowship.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is to provide a space for praise and worship, to teach God's Word with authenticity and
                compassion, and to build a community where faith strengthens bonds and transforms lives. We believe in
                the power of unity—"we're in this thing together"—as we walk the path of righteousness.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Action Statement</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We will diligently pursue the completion of our mission by establishing a robust, steadfast, and well-informed foundation within our premises. As we strive to become influential members of our community and society, we recognize that this endeavor presents significant challenges. However, we are confident that through prayer, discipline, and unwavering determination, we can achieve our objectives.
                Philippians 4:13 underscores our unwavering belief that we possess the capacity to accomplish all things.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Whether through Bible studies, prayer circles, or community service, we strive to live out our faith and
                make a positive difference in the lives of those around us.
              </p>
            </section>
          </div>

          {/* Photo Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Church Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0002.jpg" alt="Church gathering" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0003.jpg" alt="Church community" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0004.jpg" alt="Church fellowship" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0005.jpg" alt="Church event" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0006.jpg" alt="Church service" className="w-full h-64 object-cover" />
              </Card>
              <Card className="overflow-hidden">
                <img src="/gallery/IMG-20251112-WA0007.jpg" alt="Church worship" className="w-full h-64 object-cover" />
              </Card>
            </div>
          </section>

          {/* Pastor Bio */}
          <section className="bg-muted/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Leadership</h2>
            <Card className="p-8">
              <div className="text-center mb-6">
                <img
                  src="/pastor-portrait.jpg"
                  alt="Pastor Samuel Magee"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-foreground">Pastor Samuel Magee</h3>
                <p className="text-foreground/70">Spiritual Leader</p>
              </div>
              <p className="text-foreground/80 leading-relaxed text-center">
                Pastor Samuel Magee brings years of faith, wisdom, and dedication to guiding our congregation in
                spiritual growth and biblical understanding. He is committed to serving with compassion and leading by
                example, fostering a community rooted in God's Word.
              </p>
            </Card>
          </section>

          {/* Follow Us Section */}
          <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Follow Us Online</h2>
            <p className="mb-8 text-primary-foreground/90">
              Stay connected with our church community on social media
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <TikTok className="w-8 h-8" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
