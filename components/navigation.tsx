"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">✦</span>
            </div>
            <span className="hidden sm:inline text-lg font-bold text-primary">New Mt Calvary MBC</span>
            <span className="sm:hidden text-lg font-bold text-primary">NMCMBC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition">
              Gallery
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              About
            </Link>
            <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Services
            </Link>
            <Link href="/gallery" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Gallery
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
