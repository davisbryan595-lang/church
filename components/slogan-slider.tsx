"use client"

const SLOGANS = [
  "We're in this thing together",
  "Praise, Worship and Teaching God's Word",
  "Where Faith Meets Community",
  "Growing Stronger in Christ",
  "Serving with Love and Grace",
]

export function SloganSlider() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-primary via-accent to-primary py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="slogan-marquee h-16 md:h-20 flex items-center">
          <div className="slogan-track">
            <div className="slogan-sequence">
              {SLOGANS.map((slogan, index) => (
                <span
                  key={`seq1-${index}`}
                  className="text-2xl md:text-3xl font-bold text-white italic whitespace-nowrap"
                >
                  "{slogan}"
                </span>
              ))}
            </div>
            <div className="slogan-sequence" aria-hidden="true">
              {SLOGANS.map((slogan, index) => (
                <span
                  key={`seq2-${index}`}
                  className="text-2xl md:text-3xl font-bold text-white italic whitespace-nowrap"
                >
                  "{slogan}"
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
