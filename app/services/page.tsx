"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Wednesday Bible Study",
      time: "6:00 PM",
      day: "Wednesday",
      description:
        "Join us for an in-depth exploration of Scripture. We discuss biblical passages, share insights, and strengthen our faith through community learning.",
      icon: "📖",
      color: "accent",
    },
    {
      title: "Sunday School",
      time: "9:30 AM",
      day: "Sunday",
      description:
        "Begin your Sunday with spiritual education and fellowship. Classes available for all ages, covering various biblical topics and spiritual growth.",
      icon: "👥",
      color: "secondary",
    },
    {
      title: "Worship Service",
      time: "10:45 AM",
      day: "Sunday",
      description:
        "Our main service featuring praise, worship, and the teaching of God's Word. This is the heart of our church community where we gather to glorify God.",
      icon: "🙏",
      color: "primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">Our Services</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            We offer multiple opportunities for worship, study, and fellowship throughout the week. Choose what works
            best for you and your family.
          </p>

          {/* Services Grid */}
          <div className="grid gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-5xl">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {service.day} at {service.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Lake, Scott County, MS</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex gap-3">
                      <Button className="bg-primary hover:bg-primary/90">Add to Calendar</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* What to Expect */}
          <section className="bg-muted/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">A Warm Welcome</h4>
                <p className="text-foreground/70">
                  You'll be greeted with open hearts and genuine warmth. Our church family is friendly and welcoming to
                  all visitors.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Spiritual Growth</h4>
                <p className="text-foreground/70">
                  Experience teaching grounded in Scripture that helps you deepen your faith and understand God's Word.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Community Fellowship</h4>
                <p className="text-foreground/70">
                  Connect with others who share your faith and values. Build meaningful relationships within our church
                  family.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Uplifting Worship</h4>
                <p className="text-foreground/70">
                  Join in praise and worship that inspires the soul and draws us closer to God through music and prayer.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
            <p className="mb-6 opacity-90">
              We'd love to meet you! Come as you are and experience the warmth of our church community.
            </p>
            <Button asChild className="bg-white text-primary hover:bg-gray-100">
              <a
                href="https://www.google.com/maps/search/Lake,+Scott+County,+Mississippi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
