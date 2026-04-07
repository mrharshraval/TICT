import Link from "next/link"
import Image from "next/image"
import { BookOpen, Clock, Heart, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GoogleReviews } from "@/components/google-reviews"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/cta"
import { WhatsAppHub } from "@/components/whatsapp-hub"
import { HeroCardPicker } from "@/components/hero-card-picker"
import { siteConfig } from "@/lib/site-config"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Replicated from Source */}
      <section className="relative w-full overflow-hidden bg-background bg-[image:var(--image-grid-pattern)] min-h-[80vh] flex items-center justify-center pt-14">
        <div className="w-full relative z-10">
          <HeroCardPicker />
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      </section>

      {/* Featured Reading Spreads */}
      <section className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              The Sanctuary
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Most Trusted Readings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-slate-200">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Clarity</CardTitle>
                <CardDescription>A 30-minute focused session for immediate perspective. Includes free Numerology.</CardDescription>
                <div className="text-2xl font-bold mt-2">₹1,599</div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group" asChild>
                   <Link href="/pricing">
                      Experience Now
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-primary/20 ring-1 ring-primary/10">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Deep Dive</CardTitle>
                <CardDescription>60 minutes of profound exploration into your spiritual path. Includes free Numerology.</CardDescription>
                <div className="text-2xl font-bold mt-2">₹1,999</div>
              </CardHeader>
              <CardContent>
                <Button variant="default" className="w-full group" asChild>
                   <Link href="/pricing">
                      Reveal Wisdom
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-slate-200">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Year Ahead</CardTitle>
                <CardDescription>Our comprehensive yearly package with monthly guidance and WhatsApp support.</CardDescription>
                <div className="text-2xl font-bold mt-2">₹12,000</div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group" asChild>
                   <Link href="/pricing">
                      Seek Depth
                   </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="w-full bg-secondary py-20 md:py-32">
        <GoogleReviews />
      </section>

      {/* About the Foundation */}
      <section id="about" className="w-full py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Story of the Compass</h2>
          <p className="text-xl md:text-2xl text-primary font-medium italic">
            "We believe the cards don't tell your future—they tell your truth."
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            The Inner Compass was founded on the belief that everyone has an intuitive navigator within. Through the ancient art of Tarot, we help you tune out the noise and listen to your own guidance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 pt-8 w-full border-t border-border/40 mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center">
                 <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Compassion First</h4>
                <p className="text-muted-foreground mt-2">Every reading is delivered with empathy and non-judgment.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center">
                 <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Global Community</h4>
                <p className="text-muted-foreground mt-2">Connecting seekers from over 40 countries since 2021.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <FAQ 
        items={[
          { question: "What is Tarot?", answer: "Tarot is a deck of 78 cards, each with its own imagery, symbolism and story. It's used as a tool for spiritual guidance and reflection." },
          { question: "How does an online reading work?", answer: "The energy transcends physical distance. As you focus your intent and select your spread online, the synchronicity principle allows the right cards to surface for you." },
          { question: "Are my readings confidential?", answer: "Absolutely. All private sessions and personal readings are strictly confidential and will never be shared." }
        ]} 
      />

      <WhatsAppHub />
    </div>
  )
}
