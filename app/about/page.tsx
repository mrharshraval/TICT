"use client"

import { CallToAction } from "@/components/cta"
import { Compass, Sparkles, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-12 md:pt-24">
      
      {/* ── Hero ── */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
         <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
           About the Reader
         </p>
         <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1] mb-8">
           Preeti Jain
         </h1>
         <p className="text-xl text-muted-foreground leading-relaxed">
           With a Master of Computer Applications (MCA) and over 15 years navigating the high-pressure world of corporate IT, my career was built on logic, systems, and measurable results. But my heart was always tuned to a different frequency.
         </p>
      </section>

      <div className="container mx-auto px-6 md:px-12">
         <hr className="border-border/60 max-w-3xl" />
      </div>

      {/* ── Content Body ── */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
        <div className="space-y-20">
          
          {/* Section 1: The Calling */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
             <div className="md:w-1/3 shrink-0">
               <div className="flex items-center gap-3 text-foreground mb-4">
                 <Sparkles className="h-5 w-5 text-primary" />
                 <h2 className="text-lg font-semibold tracking-tight">The Calling</h2>
               </div>
             </div>
             <div className="md:w-2/3 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  My journey into spirituality wasn't a choice; it was a calling. Born in the mystical city of Udaipur, I felt a profound spiritual alignment as early as age 12. Though my path initially led me to the corporate world, that inner voice never faded.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Today, I integrate those years of discipline, systems-thinking, and leadership with my intuitive gifts as a Tarot Card Reader and Life Coach. I don't just read cards; I provide a structured, actionable framework for your spiritual growth.
                </p>
             </div>
          </div>

          {/* Section 2: Global Mission */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
             <div className="md:w-1/3 shrink-0">
               <div className="flex items-center gap-3 text-foreground mb-4">
                 <Globe className="h-5 w-5 text-primary" />
                 <h2 className="text-lg font-semibold tracking-tight">Global Mission</h2>
               </div>
             </div>
             <div className="md:w-2/3 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  From my base in Ahmedabad, I serve a global clientele, helping high-performers and soul-seekers alike find their center. By bridging the gap between corporate resilience and spiritual clarity, I empower you to lead a life that is as successful as it is soulful.
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-6 mt-8">
                   <p className="text-lg font-medium italic text-foreground leading-relaxed">
                     "My mission is simple: to spread sustainable health, authentic happiness, and mental clarity to every corner of the world."
                   </p>
                </blockquote>
             </div>
          </div>

        </div>
      </section>

      <CallToAction />
    </div>
  )
}
