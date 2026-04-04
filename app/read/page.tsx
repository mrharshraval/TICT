"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, RotateCcw, BookOpen, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import cardsData from "@/data/cards.json"
import { siteConfig } from "@/lib/site-config"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/cta"

type TarotCardData = typeof cardsData[0]

interface SpreadType {
  id: string
  name: string
  description: string
  count: number
  layout: string[]
}

const SPREADS: SpreadType[] = [
  { id: "daily", name: "Daily Guidance", description: "A single card for immediate insight.", count: 1, layout: ["The Moment"] },
  { id: "3-card", name: "Past, Present, Future", description: "Understand the timeline of your situation.", count: 3, layout: ["Past", "Present", "Future"] },
]

export default function ReadingSanctuary() {
  const [step, setStep] = useState<"spread" | "shuffling" | "picking" | "result">("spread")
  const [selectedSpread, setSelectedSpread] = useState<SpreadType | null>(null)
  const [shuffledDeck, setShuffledDeck] = useState<TarotCardData[]>([])
  const [pickedCards, setPickedCards] = useState<TarotCardData[]>([])
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Initialize deck and shuffle
  const startShuffling = (spread: SpreadType) => {
    const deck = [...cardsData].sort(() => Math.random() - 0.5)
    setShuffledDeck(deck)
    setSelectedSpread(spread)
    setStep("shuffling")
    
    // Simulate shuffling animation time
    setTimeout(() => {
      setStep("picking")
    }, 2000)
  }

  const pickCard = (card: TarotCardData) => {
    if (selectedSpread && pickedCards.length < selectedSpread.count) {
      setPickedCards((prev) => [...prev, card])
      if (pickedCards.length + 1 === selectedSpread.count) {
        setStep("result")
      }
    }
  }

  const reset = () => {
    setStep("spread")
    setSelectedSpread(null)
    setPickedCards([])
    setActiveCardIndex(null)
  }

  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center w-full min-h-[60vh]">
        <AnimatePresence mode="wait">
        {step === "spread" && (
          <motion.div
            key="spread-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-4xl space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Enter the Sanctuary</h1>
              <p className="text-muted-foreground text-lg">Choose a spread to begin your journey of discovery.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPREADS.map((spread) => (
                <Card 
                  key={spread.id} 
                  className="cursor-pointer transition-all duration-300 group"
                  onClick={() => startShuffling(spread)}
                >
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <BookOpen className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-bold">{spread.name}</h3>
                    <p className="text-muted-foreground">{spread.description}</p>
                    <Button className="mt-4 w-full">
                      Select This Spread
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {step === "shuffling" && (
          <motion.div
            key="shuffling-loop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center space-y-12 h-[60vh]"
          >
             <div className="relative w-48 h-72">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 bg-primary/20 rounded-xl"
                    animate={{
                      x: [0, (i - 2) * 40, 0],
                      y: [0, (i - 2) * 10, 0],
                      rotate: [0, (i - 2) * 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-secondary rounded-xl flex items-center justify-center p-4">
                  <Compass className="h-12 w-12 text-primary animate-spin" />
                </div>
             </div>
             <p className="text-2xl font-serif italic text-primary animate-pulse">Shuffling the energies...</p>
          </motion.div>
        )}

        {step === "picking" && (
          <motion.div
            key="picking-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-6xl space-y-8 flex flex-col items-center"
          >
            <div className="text-center">
               <h2 className="text-3xl font-bold">Pick {selectedSpread?.count} {selectedSpread?.count === 1 ? "Card" : "Cards"}</h2>
               <p className="text-muted-foreground">Focus on your intent and select when you feel a connection.</p>
               <div className="flex gap-2 justify-center mt-4">
                  {selectedSpread?.layout.map((pos, i) => (
                    <div key={i} className={`h-2 w-8 rounded-full ${i < pickedCards.length ? "bg-primary" : "bg-muted"}`} />
                  ))}
               </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
               {shuffledDeck.slice(0, 15).map((card, i) => (
                 <motion.div
                   key={i}
                    className={`w-24 h-36 rounded-lg bg-card/80 cursor-pointer overflow-hidden ${
                      pickedCards.includes(card) ? "opacity-0 pointer-events-none" : ""
                    }`}
                    onClick={() => pickCard(card)}
                 >
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center">
                       <Compass className="h-6 w-6 text-primary/30" />
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div
            key="result-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl space-y-12"
          >
            <div className="text-center space-y-4">

              <h2 className="text-4xl font-bold capitalize">{selectedSpread?.name}</h2>
              <p className="text-muted-foreground">Your resonance has been captured. Behold the wisdom.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-8">
               {pickedCards.map((card, i) => (
                 <motion.div
                   key={i}
                   initial={{ rotateY: 180 }}
                   animate={{ rotateY: 0 }}
                   transition={{ duration: 0.8, delay: i * 0.3 }}
                   className="group relative cursor-pointer"
                   onClick={() => {
                     setActiveCardIndex(i)
                     setIsDrawerOpen(true)
                   }}
                 >
                    <Card className="w-64 h-[400px] bg-secondary/20 overflow-hidden transition-colors">
                       <CardContent className="p-0 h-full flex flex-col items-center justify-center relative">
                          <div className="absolute top-4 left-4 text-xs font-mono text-primary/60 px-2 py-0.5 rounded">
                             {selectedSpread?.layout[i]}
                          </div>
                          <div className="p-8 text-center space-y-6">
                             <div className="h-48 w-full rounded overflow-hidden flex items-center justify-center bg-background">
                                <Compass className="h-24 w-24 text-primary/20" />
                             </div>
                             <h3 className="text-2xl font-bold">{card.name}</h3>
                             <p className="text-sm text-muted-foreground line-clamp-3">{card.meaning}</p>
                          </div>
                       </CardContent>
                    </Card>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-100">
                       <Button variant="outline" size="sm" className="h-8 rounded-none">
                          View Meaning <ChevronRight className="h-3 w-3 ml-1" />
                       </Button>
                    </div>
                 </motion.div>
               ))}
            </div>

            <div className="flex justify-center gap-4 py-8">
               <Button variant="outline" onClick={reset}>
                 <RotateCcw className="h-4 w-4 mr-2" />
                 Start New Reading
               </Button>
               <Button className="bg-primary/90">
                 <BookOpen className="h-4 w-4 mr-2" />
                 Save to My History
               </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-background">
          <div className="mx-auto w-full max-w-2xl">
            <DrawerHeader>
              <div className="flex items-center gap-4 text-primary mb-2">
                 <Info className="h-5 w-5" />
                 <span className="text-sm font-mono tracking-widest uppercase">
                    {activeCardIndex !== null && selectedSpread?.layout[activeCardIndex]}
                 </span>
              </div>
              <DrawerTitle className="text-4xl font-bold text-center">
                {activeCardIndex !== null && pickedCards[activeCardIndex]?.name}
              </DrawerTitle>
              <DrawerDescription className="text-lg text-center mt-4">
                {activeCardIndex !== null && pickedCards[activeCardIndex]?.meaning}
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-6 space-y-6">
               <div className="space-y-2">
                  <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Keywords</h4>
                  <p>{activeCardIndex !== null && pickedCards[activeCardIndex]?.keywords}</p>
               </div>
               <div className="bg-secondary/40 p-4 rounded-lg italic text-muted-foreground">
                  The Inner Compass suggests focusing on this resonance today. Meditation on this energy may reveal deeper truths.
               </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close Wisdom</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      </div>

      <FAQ 
        items={[
          { question: "How should I interpret reversed cards?", answer: "We primarily read upright cards focused on energy in motion. If a card feels difficult, understand it as a challenge offering growth, rather than a negative omen." },
          { question: "Can I do readings for others?", answer: "The digital sanctuary is meant for personal reflection, but you are welcome to sit with a friend and draw cards together to explore their meanings." }
        ]}
      />
      <CallToAction />
    </>
  )
}
