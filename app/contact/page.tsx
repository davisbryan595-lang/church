"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Clock } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // Mock submission - in production, this would send to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">Get in Touch</h1>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Have questions or want to learn more about New Mt Calvary? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                  {submitted && (
                    <p className="text-green-600 text-center font-medium">Thank you! We'll get back to you soon.</p>
                  )}
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <Card className="p-6 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:NewMtCalvary@myyahoo.com" className="text-primary hover:underline">
                      NewMtCalvary@myyahoo.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Address */}
              <Card className="p-6 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70">
                      Lake, Scott County
                      <br />
                      Mississippi
                    </p>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card className="p-6 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Service Times</h3>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <p>
                        <strong>Wednesday:</strong> 6:00 PM - Bible Study
                      </p>
                      <p>
                        <strong>Sunday:</strong> 9:30 AM - Sunday School
                      </p>
                      <p>
                        <strong>Sunday:</strong> 10:45 AM - Worship Service
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="p-6 overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.4233123456!2d-90.7!3d32.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626f5b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sLake%2C%20Scott%20County%2C%20MS!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
