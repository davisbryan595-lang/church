import { Mail, MapPin, Facebook, Youtube, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">New Mt Calvary MBC</h3>
            <p className="text-primary-foreground/90">Praise, Worship and Teaching God's Word</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:Newmtcalvary@newmtcalvary.com" className="hover:underline">
                  Newmtcalvary@newmtcalvary.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>1000 New Mt Calvary Rd, Lake, Mississippi 39092</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition text-sm font-semibold">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} New Mt Calvary Missionary Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
