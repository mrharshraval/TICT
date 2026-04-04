import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export function CallToAction() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20 md:py-32">
      <Card className="bg-card/40 backdrop-blur w-full">
        <CardContent className="flex flex-col items-center text-center space-y-8 py-16 md:py-24">

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
            Ready to Find Your True North?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
            Join the seekers who have found clarity, purpose, and peace through the wisdom of the Tarot. Your journey begins with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/book">
                Book Your Private Session
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg" asChild>
              <Link href="/read">
                Try a Free Reading
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
