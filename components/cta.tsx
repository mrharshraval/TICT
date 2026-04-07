import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * CallToAction — shared across every page.
 *
 * Uses bg-foreground / text-background so the banner automatically
 * inverts between light (dark surface) and dark (light surface) themes.
 * No hardcoded colors. No decorative effects.
 */
export function CallToAction() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg bg-foreground px-8 py-14 md:py-16 text-center">
            <div className="flex flex-col items-center gap-6">

              {/* Eyebrow */}
              <p className="text-xs font-medium uppercase tracking-wide text-background/50">
                Your Journey Awaits
              </p>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-background max-w-xl leading-snug">
                Ready to Find Your True North?
              </h2>

              {/* Sub-copy */}
              <p className="text-sm text-background/60 max-w-md leading-relaxed">
                Join hundreds of seekers who have found clarity, purpose, and
                peace through the wisdom of the Tarot.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  id="cta-book-session"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/book">
                    Book Your Private Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  id="cta-free-reading"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Link href="/read">
                    Try a Free Reading
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
