import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Play, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sermons & Live Events - New Mt Calvary MBC",
  description: "Access sermons and information about live events at New Mt Calvary Missionary Baptist Church.",
}

export default function Sermons() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">Sermons & Live Events</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Access our sermons and learn about upcoming live events at New Mt Calvary. Stay connected with our spiritual community.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Sermon Library</h3>
              <p className="text-foreground/80 mb-6">
                Access our collection of sermons from Pastor Samuel Magee. Revisit inspiring messages and deepen your understanding
                of God's Word.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">Live Streaming</h3>
              <p className="text-foreground/80 mb-6">
                Join us online during our worship services. Check back for details on how to watch live streams of our
                Sunday services.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Upcoming Events</h2>
            <Card className="p-8 bg-muted/50">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Special Services</h3>
                  <p className="text-foreground/70">
                    We celebrate special occasions and seasons throughout the year. Check back for announcements about upcoming
                    holiday services, revivals, and special community events.
                  </p>
                </div>
              </div>
              <div className="border-t border-primary/20 pt-6">
                <p className="text-foreground/70 text-center">
                  For the latest information about upcoming events, please contact us or follow us on social media.
                </p>
              </div>
            </Card>
          </section>

          {/* How to Access */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">How to Access Sermons</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">On Our Website</h3>
                <p className="text-foreground/80">
                  Sermons will be available for download and streaming directly from this page. You'll be able to watch or listen
                  at your convenience.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Social Media</h3>
                <p className="text-foreground/80">
                  Follow us on Facebook, YouTube, Instagram, Twitter, and TikTok for updates on sermons, live events, and church news.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">In Person</h3>
                <p className="text-foreground/80">
                  The best way to experience our sermons is to join us in person on Sunday mornings at 10:45 AM for our Worship Service.
                </p>
              </Card>
            </div>
          </section>

          {/* Contact for More Info */}
          <section className="bg-muted/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Need More Information?</h2>
            <p className="text-foreground/80 text-center mb-6">
              If you have questions about our sermons or upcoming events, please don't hesitate to reach out.
            </p>
            <div className="text-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Worship Service</h3>
            <p className="mb-6 opacity-90">
              We invite you to join us for worship. Experience the power of God's Word through our sermons and fellowship.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <Link href="/services">View Service Times</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
