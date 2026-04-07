"use client"

import { CallToAction } from "@/components/cta"

import Link from "next/link"
import { useState } from "react"
import { Check, Sparkles, Wind, Gem, ChevronDown, Star, ArrowRight, Zap } from "lucide-react"

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
    q: "How do I choose the right plan?",
    a: "'The Clarity' is perfect for quick, focused answers on a single matter. 'The Deep Dive' is for those who want to explore multiple dimensions of a situation. 'The Year Ahead' is for seekers committed to long-term, guided spiritual growth.",
  },
  {
    q: "How do WhatsApp Query Sessions work?",
    a: "Package members can message our dedicated support line anytime. We provide clear, concise spiritual guidance within 72 hours for all queries sent through WhatsApp.",
  },
  {
    q: "Are online sessions as effective as in-person?",
    a: "Absolutely. Tarot, Reiki, and numerology readings work powerfully across all channels. Many of our clients find that online sessions offer greater comfort and openness, leading to deeper insights.",
  },
  {
    q: "Can I gift a session to someone?",
    a: "Yes! We offer digital gift cards for all our sessions. Simply select the plan you wish to gift during booking, enter the recipient's details, and we'll handle the rest.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours' notice for cancellations or rescheduling. Sessions cancelled within 24 hours may be subject to a rescheduling fee. Please see our full policy on the booking page.",
  },
]

// ─── Component: PricingCard ────────────────────────────────────────────────

function PricingCard({ item, index }: { item: (typeof categories)[0]["items"][0]; index: number }) {
  const isPopular = item.badge === "Most Popular"
  const isBestValue = item.badge === "Best Value"
  const isPremium = item.badge === "Premium"
  const hasHighlight = isPopular || isBestValue || isPremium

  return (
    <div
      className={`
        group relative flex flex-col rounded-3xl overflow-hidden transition-colors duration-300
        ${hasHighlight
          ? "bg-[#1E152A] text-white ring-1 ring-purple-500/20"
          : "bg-white text-slate-900 ring-1 ring-slate-100"
        }
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient glow for popular card */}
      {hasHighlight && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
      )}

      {/* Badge */}
      {item.badge && (
        <div className="absolute top-6 right-6 z-10">
          <span className={`
            inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest
            ${isPopular ? "bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/40" : ""}
            ${isBestValue ? "bg-amber-400/20 text-amber-300 ring-1 ring-amber-400/40" : ""}
            ${isPremium ? "bg-rose-400/20 text-rose-300 ring-1 ring-rose-400/40" : ""}
          `}>
            <Star className="w-3 h-3 fill-current" />
            {item.badge}
          </span>
        </div>
      )}

      <div className="p-8 pb-6 flex flex-col flex-1">
        {/* Plan name */}
        <h3 className={`text-xl font-bold tracking-tight mb-3 ${hasHighlight ? "text-white" : "text-slate-900"}`}>
          {item.name}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-8 min-h-[3.5rem] ${hasHighlight ? "text-purple-200/70" : "text-slate-500"}`}>
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1.5 mb-8">
          {item.currency && (
            <span className={`text-lg font-semibold self-start mt-1.5 ${hasHighlight ? "text-purple-300" : "text-slate-400"}`}>
              {item.currency}
            </span>
          )}
          <span className={`text-5xl font-semibold tracking-tight leading-none ${hasHighlight ? "text-white" : "text-slate-900"}`}>
            {item.price}
          </span>
          <span className={`text-sm mb-1 ml-0.5 ${hasHighlight ? "text-purple-300/70" : "text-slate-400"}`}>
            {item.unit}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={item.ctaHref}
          className={`
            group/btn relative flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 mb-8 overflow-hidden
            ${hasHighlight
              ? "bg-white text-[#1E152A] hover:bg-purple-50"
              : "bg-[#1E152A] text-white hover:bg-slate-800"
            }
          `}
        >
          <span className="relative z-10">{item.cta}</span>
          <ArrowRight className="w-4 h-4 relative z-10" />
        </Link>

        {/* Divider */}
        <div className={`w-full h-px mb-6 ${hasHighlight ? "bg-white/10" : "bg-slate-100"}`} />

        {/* Features */}
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-5 ${hasHighlight ? "text-purple-300/60" : "text-slate-400"}`}>
          What's included
        </p>
        <ul className="space-y-3.5 flex-1">
          {item.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`
                w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5
                ${hasHighlight ? "bg-purple-500/20" : "bg-slate-100"}
              `}>
                <Check className={`w-3 h-3 ${hasHighlight ? "text-purple-300" : "text-slate-600"}`} strokeWidth={3} />
              </div>
              <span className={`text-sm leading-snug ${hasHighlight ? "text-purple-100/80" : "text-slate-600"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Component: FAQItem ────────────────────────────────────────────────────

function FAQItemComp({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-purple-200 bg-purple-50/50" : "border-slate-100 bg-white hover:border-purple-100"
      }`}
    >
      <button
        id={`faq-item-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">{faq.q}</span>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-purple-100 rotate-180" : "bg-slate-100"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${open ? "text-purple-600" : "text-slate-500"}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("tarot")
  const activeCategory = categories.find((c) => c.id === activeTab)!

  return (
    <div className="min-h-screen bg-[#FDFCF8]">

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-violet-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap className="w-3 h-3" />
            Transparent Pricing
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E152A] leading-[1.1] mb-6">
            Invest in Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                Spiritual Growth
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-3 bg-purple-100/60 rounded-sm -z-0" />
            </span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Choose the plan that resonates with your journey. Every session is a step towards deeper self-understanding, clarity, and purpose.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              No subscription lock-in
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Secure online payment
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              Cancel anytime
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── Tab Navigation ── */}
      <section className="pb-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-white rounded-2xl p-1.5 ring-1 ring-slate-100 gap-1">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeTab === cat.id
                return (
                  <button
                    key={cat.id}
                    id={`tab-${cat.id}`}
                    onClick={() => setActiveTab(cat.id)}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap
                      ${isActive
                        ? "bg-[#1E152A] text-white"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
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
      <section className="py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-3">{activeCategory.tagline}</p>
        <p className="text-slate-500 leading-relaxed">{activeCategory.description}</p>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
        <div
          key={activeTab}
          className={`
            grid gap-6 max-w-6xl mx-auto
            ${activeCategory.items.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-3xl" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
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
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm text-slate-400">
          Not sure which plan is right for you?{" "}
          <Link href="/book" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
            Book a free 10-min discovery call →
          </Link>
        </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-slate-100 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-4">Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1E152A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">Everything you need to know before booking your session.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItemComp key={i} faq={faq} index={i} />
            ))}
          </div>
          </div>
        </div>
      </section>

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
