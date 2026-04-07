import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * CallToAction — shared across every page.
 *
 * The banner itself uses the absolute `brand-indigo` token (#1E152A) so it
 * always renders as a rich dark surface regardless of light / dark mode.
 * The ambient glow orbs and text are fixed to that surface, giving a
 * perfectly consistent look everywhere it is placed.
 */
export function CallToAction() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-[#1E152A] overflow-hidden px-8 py-16 md:py-20 text-center">

          {/* ── Decorative ambient orbs ─────────────────────────────────── */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-20 rounded-full bg-purple-500/10 blur-2xl" />
          </div>

          {/* ── Content ─────────────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Eyebrow */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-5">
              Your Journey Awaits
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-tight mb-6">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                True North?
              </span>
            </h2>

            {/* Sub-copy */}
            <p className="text-purple-200/70 max-w-xl leading-relaxed mb-10">
              Join hundreds of seekers who have found clarity, purpose, and
              peace through the wisdom of the Tarot. Your journey begins with
              a single step.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                id="cta-book-session"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-2.5 rounded-xl
                  bg-white text-[#1E152A]
                  font-bold text-sm tracking-wide
                  transition-all duration-300
                  hover:bg-purple-50
                "
              >
                Book Your Private Session
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/read"
                id="cta-free-reading"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-2.5 rounded-xl
                  bg-white/10 text-white
                  font-bold text-sm tracking-wide
                  border border-white/10
                  transition-all duration-300
                  hover:bg-white/15
                "
              >
                Try a Free Reading
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
