"use client"

import { CallToAction } from "@/components/cta"
import { FAQ } from "@/components/faq"

import Link from "next/link"
import { useState } from "react"
import { Check, Sparkles, Wind, Gem, ArrowRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "tarot",
    label: "Tarot Readings",
    icon: Sparkles,
    tagline: "Uncover What the Cards Reveal",
    description: "A deep-dive into our tarot sessions to help you uncover hidden truths and navigate life's crossroads.",
    items: [
      {
        name: "The Clarity",
        price: "1,599",
        currency: "₹",
        unit: "per session",
        badge: null,
        description: "Perfect for those seeking immediate perspective on a specific situation. Get quick, actionable insights.",
        features: [
          "Interactive Narrative Spread",
          "Comprehensive card interpretation",
          "Free DOB Numerology reading",
          "Live Audio / Video Session",
          "Real-time interpretation & support",
        ],
        cta: "Get Started",
        ctaHref: "/book?type=the-clarity",
      },
      {
        name: "The Deep Dive",
        price: "1,999",
        currency: "₹",
        unit: "per session",
        badge: "Most Popular",
        description: "Advanced spiritual path exploration with extended Q&A. Go deeper than the surface-level answers.",
        features: [
          "Advanced Multilayer Spread",
          "Psychological & Spiritual insights",
          "Extended Q&A session",
          "Detailed Session Summary",
          "Real-time interpretation & support",
          "Dedicated post-session follow-up",
        ],
        cta: "Book Now",
        ctaHref: "/book?type=the-deep-dive",
      },
      {
        name: "The Year Ahead",
        price: "12,000",
        currency: "₹",
        unit: "per year",
        badge: "Best Value",
        description: "A full year of guided spiritual growth. Monthly sessions with priority access and dedicated support.",
        features: [
          "12 one-on-one sessions (monthly)",
          "One half-price reading per month",
          "WhatsApp Query Sessions (5/mo)",
          "Monthly alignment check-ins",
          "24/7 priority support",
          "Dedicated account manager",
          "Tailored training & resources",
        ],
        cta: "Start Your Year",
        ctaHref: "/book?type=the-year-ahead",
      },
    ],
  },
  {
    id: "healing",
    label: "Healing Services",
    icon: Wind,
    tagline: "Restore Your Energy & Balance",
    description: "Energy work and vibrational therapy plans designed to restore your internal balance and elevate your frequency.",
    items: [
      {
        name: "Sound Healing",
        price: "499",
        currency: "₹",
        unit: "per 60 mins",
        badge: null,
        description: "Recalibrate your frequency through guided sonic meditation. Experience deep, restorative relaxation.",
        features: [
          "Guided sonic meditation",
          "Frequency alignment session",
          "Deep relaxation techniques",
          "Digital recording provided",
          "24/7 audio support access",
        ],
        cta: "Book Session",
        ctaHref: "/book?type=sound-healing",
      },
      {
        name: "Reiki Healing",
        price: "1,999",
        currency: "₹",
        unit: "per session",
        badge: "Most Popular",
        description: "Universal life force energy work for chakra balancing and distance healing manifestation.",
        features: [
          "Universal life force energy work",
          "Distance healing manifestation",
          "Advanced chakra assessment",
          "Extended energy access",
          "Post-session energy report",
          "Dedicated account manager",
        ],
        cta: "Book Session",
        ctaHref: "/book?type=reiki-healing",
      },
      {
        name: "Full Balancing",
        price: "Custom",
        currency: "",
        unit: "per consultation",
        badge: "Premium",
        description: "A bespoke, holistic session combining all healing modalities tailored precisely to your energetic needs.",
        features: [
          "Complete chakra balancing process",
          "Crystal energy healing",
          "Access to exclusive webinars",
          "Monthly performance reviews",
          "Real-time energy tracking",
          "Tailored spiritual sessions",
        ],
        cta: "Enquire Now",
        ctaHref: "/book?type=full-balancing",
      },
    ],
  },
  {
    id: "numerology",
    label: "Numerology & Crystals",
    icon: Gem,
    tagline: "Ancient Wisdom Meets Mineral Alchemy",
    description: "Ancient wisdom and mineral allyship to decode your life's blueprint and support your unique path.",
    items: [
      {
        name: "Numerical Map",
        price: "1,499",
        currency: "₹",
        unit: "per consultation",
        badge: null,
        description: "Decode your life's blueprint via Date of Birth. A foundational reading for self-understanding.",
        features: [
          "Loshu Grid analysis",
          "Vedic Numerology insights",
          "Basic analytics & email support",
          "Custom dashboards guidance",
          "Real-time data tracking",
        ],
        cta: "Get Your Map",
        ctaHref: "/book?type=numerical-map",
      },
      {
        name: "Crystal Path",
        price: "Varies",
        currency: "",
        unit: "per consultation",
        badge: "Most Popular",
        description: "Personalised crystal guidance sourced as per your DOB and current needs. Includes aura protection.",
        features: [
          "Guidance 'as per DOB'",
          "Guidance 'as per need'",
          "Charged crystal tracking",
          "Aura protection stones",
          "Extended crystal sourcing",
          "Dedicated account manager",
          "Tailored training sessions",
        ],
        cta: "Begin Path",
        ctaHref: "/book?type=crystal-path",
      },
    ],
  },
]

const faqs = [
  {
    question: "How do I choose the right plan?",
    answer: "'The Clarity' is perfect for quick, focused answers on a single matter. 'The Deep Dive' is for those who want to explore multiple dimensions of a situation. 'The Year Ahead' is for seekers committed to long-term, guided spiritual growth.",
  },
  {
    question: "How do WhatsApp Query Sessions work?",
    answer: "Package members can message our dedicated support line anytime. We provide clear, concise spiritual guidance within 72 hours for all queries sent through WhatsApp.",
  },
  {
    question: "Are online sessions as effective as in-person?",
    answer: "Absolutely. Tarot, Reiki, and numerology readings work powerfully across all channels. Many of our clients find that online sessions offer greater comfort and openness, leading to deeper insights.",
  },
  {
    question: "Can I gift a session to someone?",
    answer: "Yes! We offer digital gift cards for all our sessions. Simply select the plan you wish to gift during booking, enter the recipient's details, and we'll handle the rest.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We ask for at least 24 hours' notice for cancellations or rescheduling. Sessions cancelled within 24 hours may be subject to a rescheduling fee. Please see our full policy on the booking page.",
  },
]

// ─── Component: PricingCard ────────────────────────────────────────────────

function PricingCard({ item, index }: { item: (typeof categories)[0]["items"][0]; index: number }) {
  const hasHighlight = !!item.badge

  return (
    <div
      className={`
        relative flex flex-col rounded-lg overflow-hidden border border-border transition-colors duration-200
        ${hasHighlight ? "bg-foreground text-background" : "bg-card text-card-foreground"}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      {item.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wide bg-background/15 text-background/70">
            {item.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Plan name */}
        <h3 className={`text-base font-semibold mb-2 ${hasHighlight ? "text-background" : "text-foreground"}`}>
          {item.name}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 min-h-[3rem] ${hasHighlight ? "text-background/60" : "text-muted-foreground"}`}>
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-6">
          {item.currency && (
            <span className={`text-sm font-medium self-start mt-1 ${hasHighlight ? "text-background/60" : "text-muted-foreground"}`}>
              {item.currency}
            </span>
          )}
          <span className={`text-4xl font-semibold tracking-tight leading-none ${hasHighlight ? "text-background" : "text-foreground"}`}>
            {item.price}
          </span>
          <span className={`text-xs mb-1 ml-0.5 ${hasHighlight ? "text-background/50" : "text-muted-foreground"}`}>
            {item.unit}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={item.ctaHref}
          className={`
            flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-medium transition-colors mb-6
            ${hasHighlight
              ? "bg-background text-foreground hover:bg-background/90"
              : "bg-foreground text-background hover:bg-foreground/90"
            }
          `}
        >
          {item.cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Divider */}
        <div className={`w-full h-px mb-5 ${hasHighlight ? "bg-background/10" : "bg-border"}`} />

        {/* Features */}
        <p className={`text-[10px] font-medium uppercase tracking-wide mb-4 ${hasHighlight ? "text-background/40" : "text-muted-foreground"}`}>
          What's included
        </p>
        <ul className="space-y-3 flex-1">
          {item.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${hasHighlight ? "text-background/60" : "text-primary"}`} strokeWidth={2.5} />
              <span className={`text-sm leading-snug ${hasHighlight ? "text-background/70" : "text-muted-foreground"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("tarot")
  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium uppercase tracking-wide mb-6">
            Transparent Pricing
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground leading-snug mb-5">
            Invest in Your Spiritual Growth
          </h1>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Choose the plan that resonates with your journey. Every session is a step towards deeper self-understanding and clarity.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span>No subscription lock-in</span>
            <span>·</span>
            <span>Secure online payment</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
          </div>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <section className="pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-muted rounded-md p-0.5 gap-0.5">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    id={`tab-${cat.id}`}
                    onClick={() => setActiveTab(cat.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                      ${isActive
                        ? "bg-background text-foreground border border-border"
                        : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Header ── */}
      <section className="py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">{activeCategory.tagline}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{activeCategory.description}</p>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
        <div
          key={activeTab}
          className={`
            grid gap-6 w-full mx-auto
            ${activeCategory.items.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
          `}
          style={{ animation: "fadeSlideIn 0.4s ease both" }}
        >
          {activeCategory.items.map((item, i) => (
            <PricingCard key={item.name} item={item} index={i} />
          ))}
        </div>
        </div>
      </section>

      {/* ── Compare note ── */}
      <section className="pb-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-muted-foreground">
          Not sure which plan is right for you?{" "}
          <Link href="/book" className="text-primary font-medium hover:underline transition-colors">
            Book a free 10-min discovery call →
          </Link>
        </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={faqs}
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your session."
      />

      <CallToAction />

      {/* Keyframe animation */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
