"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { TAROT_CARDS, TarotBaseCard } from "@/lib/tarot-data"
import { TarotCard } from "@/components/ui/tarot-card"
import { cn } from "@/lib/utils"

export function HeroCardPicker() {
    const [deck, setDeck] = useState<TarotBaseCard[]>([])
    const [drawnCards, setDrawnCards] = useState<TarotBaseCard[]>([])
    const [isShuffling, setIsShuffling] = useState(false)
    const [resetKey, setResetKey] = useState(0) // Forces instant remount on reset
    const [revealedIndices, setRevealedIndices] = useState<number[]>([])

    // Initialize and Shuffle Deck
    useEffect(() => {
        shuffleDeck()
    }, [])

    const shuffleDeck = () => {
        setIsShuffling(true)
        setDrawnCards([])
        setRevealedIndices([])

        // Clear old deck (triggers exit animation)
        setDeck([])

        // Wait for exit animation, then show new shuffled deck
        setTimeout(() => {
            const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5)
            setDeck(shuffled) // New random deck with entrance animation
            setResetKey(prev => prev + 1) // Force remount after deck is set
            setIsShuffling(false)
        }, 200) // Wait for exit animation to complete
    }

    const handleDrawCard = (index: number) => {
        if (drawnCards.length >= 3 || isShuffling) return

        const card = deck[index]
        // Check if already drawn (unlikely with index but good safety)
        if (drawnCards.some(c => c.id === card.id)) return

        setDrawnCards(prev => [...prev, card])
    }

    const handleRevealCard = (index: number) => {
        if (!revealedIndices.includes(index)) {
            setRevealedIndices(prev => [...prev, index])
        }
    }

    const SLOTS = [
        { label: "Persona", delay: 0 },
        { label: "Obstacle", delay: 0.1 },
        { label: "Solution", delay: 0.2 }
    ]

    const isReadingComplete = drawnCards.length === 3

    const deckCards = useMemo(() => {
        const visibleDeck = deck
            .filter(card => !drawnCards.some(d => d.id === card.id))
            .slice(0, 64) // Increased to fill width

        return visibleDeck.map((card, i) => {
            const totalCards = visibleDeck.length
            const centerIndex = (totalCards - 1) / 2
            const currentAngle = -90 + (i - centerIndex) * 0.55 // Wider spread factor for 64 cards
            const radian = (currentAngle * Math.PI) / 180
            const radius = 3500
            const x = Math.cos(radian) * radius
            const y = (radius * Math.sin(radian)) + radius + 30
            const rotate = currentAngle + 90

            return (
                <motion.div
                    key={`${card.id}-${resetKey}`}
                    layoutId={`card-${card.id}-${resetKey}`}
                    className="absolute bottom-0 left-1/2 origin-bottom cursor-pointer will-change-transform pointer-events-auto"
                    style={{
                        marginLeft: -40, // Default w-20
                        zIndex: i,
                        x: x,
                        y: y,
                        rotate: rotate
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                    transition={{ delay: i * 0.008, duration: 0.3, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.15,
                        y: -40,
                        rotate: rotate,
                        filter: "brightness(1.1) contrast(1.1)",
                        transition: { duration: 0.2, ease: "easeOut" }
                    }}
                >
                    <div onClick={(e) => {
                        e.stopPropagation()
                        const originalIndex = deck.findIndex(c => c.id === card.id)
                        handleDrawCard(originalIndex)
                    }}>
                        <div className="w-20 h-32 md:w-24 md:h-40 bg-[#5D2E86] rounded relative overflow-hidden group shadow-lg border border-white/20">
                            <div className="absolute inset-0 bg-[url('/tarot-back-full.png')] bg-cover bg-center bg-no-repeat" />
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            )
        })
    }, [deck, drawnCards, resetKey])

    return (
        <div className="relative w-full flex flex-col items-center justify-start min-h-[580px] pt-4 pb-4 overflow-hidden">
            
            {/* Reading Status / Typography */}
            <div className="text-center mb-6 space-y-2 z-30 max-w-2xl px-4">
                <AnimatePresence mode="wait">
                    {!isReadingComplete ? (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                {drawnCards.length === 0 ? "Daily Reading" : "The Journey"}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
                                {drawnCards.length === 0
                                    ? "Focus your intent"
                                    : `Card ${drawnCards.length + 1} of 3: ${SLOTS[drawnCards.length].label}`
                                }
                            </h2>
                            <p className="text-slate-500 text-[10px] uppercase font-medium tracking-[0.2em]">
                                {drawnCards.length === 0
                                    ? "The universe is listening"
                                    : "Choose wisely"
                                }
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="reading"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                                Reading Complete
                            </div>
                            <h3 className="text-3xl md:text-4xl text-slate-800 italic font-semibold">
                                "The path is revealed through your intuition."
                            </h3>
                            <div className="pt-4 flex gap-4 justify-center">
                                <Button className="rounded-full px-8 h-12" onClick={shuffleDeck}>
                                    <RefreshCw className="w-4 h-4 mr-2" /> New Reading
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Visuals / 3-Card Spread Slots */}
            <div className="relative w-full flex flex-col items-center justify-center min-h-[250px] z-10">
                <div className="relative z-20 flex justify-center items-end gap-3 md:gap-6 w-full">
                    {SLOTS.map((slot, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <div className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">{slot.label}</div>
                            <div className="relative w-20 h-32 md:w-28 md:h-44 flex items-center justify-center rounded bg-black/5 shadow-inner border border-white/10 overflow-hidden transform-gpu">
                                <AnimatePresence mode="popLayout">
                                    {drawnCards[idx] && (
                                        <motion.div
                                            layoutId={`card-${drawnCards[idx].id}-${resetKey}`}
                                            className="w-full h-full z-10"
                                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "circOut",
                                                scale: { type: "spring", stiffness: 300, damping: 25 }
                                            }}
                                        >
                                            <TarotCard
                                                card={drawnCards[idx]}
                                                isFaceUp={revealedIndices.includes(idx)}
                                                onClick={() => handleRevealCard(idx)}
                                                className="w-full h-full shadow-2xl"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {!drawnCards[idx] && (
                                    <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                                        <span className="text-2xl font-light">+</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FULL WIDTH DECK CONTAINER */}
            <AnimatePresence>
                {!isReadingComplete && (
                    <motion.div
                        key="deck-container"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 right-0 h-[240px] z-50 flex items-end justify-center overflow-visible pointer-events-none pb-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {deckCards}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
