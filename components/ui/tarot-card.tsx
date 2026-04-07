"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TarotCardProps {
    card?: {
        id: number | string;
        name: string;
        image: string;
        isMajor?: boolean;
    }; // Can be undefined if face down and unknown
    isFaceUp: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    layoutId?: string;
}

export function TarotCard({ card, isFaceUp, onClick, className, style, layoutId }: TarotCardProps) {
    return (
        <div
            className={cn(
                "relative w-full h-full rounded cursor-pointer perspective-1000 group",
                className
            )}
            style={style}
            onClick={onClick}
        >
            <motion.div
                layoutId={layoutId}
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFaceUp ? 180 : 0 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Back of Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded bg-[#5D2E86] overflow-hidden" 
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg) translateZ(0px)'
                    }}
                >
                    <div className="absolute inset-0 bg-[url('/tarot-back-full.png')] bg-cover bg-center bg-no-repeat" />
                </div>

                {/* Front of Card */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded border-2 border-brand-lavender/50 shadow-xl bg-white overflow-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(1px)'
                    }}
                >
                    {card && (
                        <div className="relative w-full h-full">
                            <Image
                                src={card.image}
                                alt={card.name}
                                fill
                                className="object-cover rounded"
                                sizes="(max-width: 768px) 128px, 160px"
                                priority={false}
                                unoptimized
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
