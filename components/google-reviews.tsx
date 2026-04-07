import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const MOCK_REVIEWS = [
  {
    name: "Sarah J.",
    review: "The reading was incredibly insightful. It felt like they knew exactly what was on my mind and provided genuine clarity.",
    rating: 5,
  },
  {
    name: "Michael R.",
    review: "Beautifully presented and very accurate. The Inner Compass is my absolute go-to for spiritual grounding.",
    rating: 5,
  },
  {
    name: "Elena D.",
    review: "I've had many readings before, but this one was entirely different. Deeply spiritual, respectful, and highly grounding.",
    rating: 5,
  },
  {
    name: "David L.",
    review: "Highly recommend the Celtic Cross spread. It gave me a whole new perspective on a situation I was stuck in.",
    rating: 5,
  },
]

export function GoogleReviews() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left: Standard Corporate Summary */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:w-1/3 sticky top-32">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Real Seeker Stories</h2>
           <p className="text-muted-foreground text-lg">Listen to the experiences of those who have sat at our table and found clarity.</p>
           
           <div className="pt-8 flex flex-col items-center lg:items-start gap-4 border-t border-border/40 w-full">
             <div className="flex items-center gap-4">
                <span className="text-5xl font-semibold tracking-tight">5.0</span>
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-sm font-semibold tracking-wider flex items-center gap-2">
                     Google Reviews
                  </span>
                </div>
             </div>
             <p className="text-sm text-muted-foreground">Based on 142 authentic ratings.</p>
             <Button variant="outline" size="default" className="mt-4">
               <ExternalLink className="h-4 w-4 mr-2" /> Read All Reviews
             </Button>
           </div>
        </div>
        
        {/* Right: Static Masonry/Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
           {MOCK_REVIEWS.map((review, idx) => (
             <Card key={idx} className="bg-card flex flex-col shadow-none">
                <CardContent className="p-8 flex flex-col h-full space-y-6">

                  <p className="text-muted-foreground italic leading-relaxed text-base flex-1">
                     "{review.review}"
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-border/20">
                     <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {review.name.charAt(0)}
                     </div>
                     <span className="font-semibold text-sm">{review.name}</span>
                  </div>
                </CardContent>
             </Card>
           ))}
        </div>
        
      </div>
    </div>
  )
}
