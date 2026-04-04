import Link from "next/link"
import Image from "next/image"
import { BookOpen, Clock, Heart, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GoogleReviews } from "@/components/google-reviews"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/cta"
import { siteConfig } from "@/lib/site-config"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10 -z-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
            <div className="flex flex-col items-start space-y-8 animate-in fade-in slide-in-from-left-6 duration-1000">
              <div className="space-y-4 text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
                  The Inner Compass <span className="text-primary italic">Tarot</span>
                </h1>
                <p className="max-w-[540px] text-muted-foreground text-lg md:text-xl">
                  Unlock the wisdom of the cards. Your path to clarity, purpose, and spiritual growth begins here.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                  <Link href="/read">
                    Start Your Reading
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                  <Link href="/book">
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
            {/* Visual Column / Future Cards Placeholder */}
            <div className="hidden lg:flex relative h-[500px] w-full items-end justify-end overflow-visible">
               {/* This space is reserved for the 3 tarot cards */}
            </div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/40 backdrop-blur-sm transition-all duration-300">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Daily Draw</CardTitle>
                <CardDescription>A single card to guide your morning and set your intention.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group" asChild>
                   <Link href="/read?type=daily">
                      Experience Now
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card/40 backdrop-blur-sm transition-all duration-300">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Three-Card Spread</CardTitle>
                <CardDescription>Insights into your Past, Present, and Future journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group" asChild>
                   <Link href="/read?type=3-card">
                      Reveal Wisdom
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card/40 backdrop-blur-sm transition-all duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>The Celtic Cross</CardTitle>
                <CardDescription>Our most comprehensive reading for deep clarity and foresight.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group" asChild>
                   <Link href="/read?type=celtic">
                      Seek Depth
                   </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="w-full bg-secondary/5 py-20 md:py-32">
        <GoogleReviews />
      </section>

      {/* About the Foundation */}
      <section id="about" className="w-full py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl flex flex-col items-center text-center space-y-10">
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
      </section>
      <FAQ 
        items={[
          { question: "What is Tarot?", answer: "Tarot is a deck of 78 cards, each with its own imagery, symbolism and story. It's used as a tool for spiritual guidance and reflection." },
          { question: "How does an online reading work?", answer: "The energy transcends physical distance. As you focus your intent and select your spread online, the synchronicity principle allows the right cards to surface for you." },
          { question: "Are my readings confidential?", answer: "Absolutely. All private sessions and personal readings are strictly confidential and will never be shared." }
        ]} 
      />

      <CallToAction />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-foreground text-background p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border border-border/50 backdrop-blur"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-medium">
          Consult on WhatsApp
        </span>
      </a>
    </div>
  )
}
