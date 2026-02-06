"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, BookOpen, Users, FileText } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Minimal */}
      <section
        className="relative text-primary-foreground bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2Fe956acbb04e54fb896c83542bdb88b2d%2Fb7b5b1337b31417f9d70063755718858?format=webp&width=800&height=1200')",
          aspectRatio: "16 / 9",
          minHeight: "500px",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">New Mt Calvary MBC</h1>
          <p className="text-xl italic text-white/90 mb-6 drop-shadow-md">We're in this thing together</p>
          <p className="text-2xl font-semibold text-white/95 mb-8 drop-shadow-md">
            Praise, Worship and Teaching God's Word
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg">
              <Link href="/services">Join Us Sunday</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/20 text-white hover:bg-white/30 border border-white shadow-lg"
            >
              <a
                href="https://www.google.com/maps/place/1000+New+Mt+Calvary+Rd,+Lake,+MS+39092"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access - 4 Cards */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mission Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-foreground/70">Learn about our church's mission and values</p>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Our Mission</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-foreground/80">
                    Our mission is to provide a space for praise and worship, to teach God's Word with authenticity and
                    compassion, and to build a community where faith strengthens bonds and transforms lives.
                  </p>
                  <p className="text-foreground/80">
                    We believe in the power of unity—"we're in this thing together"—as we walk the path of
                    righteousness.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Community Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-2">Community Focus</h3>
                  <p className="text-sm text-foreground/70">Discover our commitment to community service</p>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Community Focus</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-foreground/80">
                    "We're in this thing together" - our church is built on unity, faith, and serving one another in
                    love.
                  </p>
                  <p className="text-foreground/80">
                    Whether through Bible studies, prayer circles, or community service, we strive to live out our faith
                    and make a positive difference in the lives of those around us.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Gallery */}
            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Gallery</h3>
              <p className="text-sm text-foreground/70 mb-4">View our church photos and memories</p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </Card>

            {/* Sermons & Events */}
            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Sermons & Events</h3>
              <p className="text-sm text-foreground/70 mb-4">Access sermons and live event info</p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/sermons">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Service Times</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join us for worship and spiritual growth throughout the week
          </p>

          <div className="space-y-4 max-w-2xl mx-auto mb-12">
            {/* Wednesday Service */}
            <Card className="p-6 hover:shadow-md transition border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-foreground mb-1">Wednesday Bible Study</h4>
                  <p className="text-foreground/70">6:00 PM</p>
                  <p className="text-foreground/60 text-sm mt-2">Deep dive into Scripture with our church community</p>
                </div>
                <Button variant="outline" size="sm">
                  Add to Calendar
                </Button>
              </div>
            </Card>

            {/* Sunday School */}
            <Card className="p-6 hover:shadow-md transition border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-foreground mb-1">Sunday School</h4>
                  <p className="text-foreground/70">9:30 AM</p>
                  <p className="text-foreground/60 text-sm mt-2">Fellowship and spiritual education for all ages</p>
                </div>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Worship Service */}
            <Card className="p-6 hover:shadow-md transition border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-foreground mb-1">Worship Service</h4>
                  <p className="text-foreground/70">10:45 AM</p>
                  <p className="text-foreground/60 text-sm mt-2">Join us for praise, worship and teaching God's Word</p>
                </div>
                <Button variant="outline" size="sm">
                  Join Us
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button asChild variant="outline" size="lg">
              <Link href="/sunday-school">Sunday School Page</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/bible-study">Bible Study Page</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">Full Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Church Family</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Come worship with us and experience the warmth of our community. All are welcome!
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
