import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sunday School - New Mt Calvary MBC",
  description: "Join us for Sunday School at New Mt Calvary Missionary Baptist Church. Classes for all ages.",
}

export default function SundaySchool() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">Sunday School</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Spiritual growth and fellowship for all ages. Join us every Sunday at 9:30 AM for Bible study and Christian education.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Service Time</h3>
              <p className="text-foreground/70">Every Sunday at 9:30 AM</p>
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
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">For Everyone</h3>
              <p className="text-foreground/70">All ages welcome</p>
            </Card>
          </div>

          {/* Content Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">About Our Program</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">A Welcoming Community</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Sunday School at New Mt Calvary is more than just a class—it's a time for fellowship, spiritual growth,
                  and connection with our church family. We welcome everyone, regardless of age or background.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Learn Together</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our Sunday School classes are designed to help you deepen your understanding of God's Word. We offer
                  classes for children, youth, and adults, each tailored to meet the needs of our community.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Growing in Faith</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Through group discussions, Bible study, and interactive learning, we help our members grow spiritually
                  and strengthen their relationship with God. Sunday School provides a foundation for worship and
                  service.
                </p>
              </Card>
            </div>
          </section>

          {/* Class Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Class Information</h2>
            <Card className="p-8 bg-muted/50">
              <p className="text-foreground/80 text-center mb-6">
                We offer Sunday School classes for all ages. For specific details about class topics, teachers, and locations
                within the church building, please contact us or visit on Sunday mornings.
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
            <h3 className="text-2xl font-bold mb-4">Join Us This Sunday</h3>
            <p className="mb-6 opacity-90">
              Come experience the warmth and fellowship of our Sunday School community. We look forward to welcoming you!
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
