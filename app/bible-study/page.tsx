import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Bible Study - New Mt Calvary MBC",
  description: "Wednesday Bible Study at New Mt Calvary Missionary Baptist Church. Deep dive into Scripture.",
}

export default function BibleStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">Bible Study</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Join us for an in-depth exploration of Scripture. Every Wednesday at 6:00 PM, we gather to discuss biblical passages,
            share insights, and strengthen our faith through community learning.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Study Time</h3>
              <p className="text-foreground/70">Every Wednesday at 6:00 PM</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Location</h3>
              <p className="text-foreground/70">1000 New Mt Calvary Rd, Lake, MS 39092</p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">What We Study</h3>
              <p className="text-foreground/70">God's Word in depth</p>
            </Card>
          </div>

          {/* Content Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Bible Study Program</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Deep Dive into Scripture</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our Bible Study sessions provide an opportunity to explore God's Word in detail. We examine biblical texts,
                  discuss their meaning and application to our lives, and grow together in our faith and understanding.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Community Learning</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Bible Study is a communal experience. We learn from one another, share insights, and support each other in our
                  spiritual journeys. The diversity of perspectives enriches our understanding and strengthens our bonds as a church family.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Strengthen Your Faith</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Whether you're new to Bible study or have been seeking deeper knowledge for years, our Wednesday sessions welcome
                  all levels. Come as you are and grow in your relationship with God through the study of His Word.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Open Discussion</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We believe in the power of open dialogue. Our Bible Study sessions encourage questions, discussions, and personal
                  reflection. Every voice is valued, and all perspectives are considered with respect and grace.
                </p>
              </Card>
            </div>
          </section>

          {/* Current Topics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">What We're Studying</h2>
            <Card className="p-8 bg-muted/50">
              <p className="text-foreground/80 text-center mb-6">
                Our Bible Study topics rotate throughout the year, covering various books of the Bible and spiritual themes.
                For information about our current study, please contact us or visit on Wednesday evenings.
              </p>
              <div className="text-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Us Wednesday Night</h3>
            <p className="mb-6 opacity-90">
              Come study God's Word with us. Whether you're seeking deeper spiritual understanding or just beginning your faith journey,
              you're welcome to join our Bible Study community.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <a
                href="https://www.google.com/maps/place/1000+New+Mt+Calvary+Rd,+Lake,+MS+39092"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
