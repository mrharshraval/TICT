import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { FAQ, FAQItem } from "@/components/faq"
import { CallToAction } from "@/components/cta"

const pricingTiers = [
  {
    name: "The Daily Draw",
    price: "₹2,000",
    duration: "15 mins",
    description: "A quick, focused session to set your intention or answer a single pressing question.",
    features: [
      "1-Card Pull",
      "Live Video or Audio",
      "Digital snapshot of the card",
      "Brief written summary"
    ]
  },
  {
    name: "3-Card Spread",
    price: "₹4,000",
    duration: "30 mins",
    description: "Our most popular reading. Explore the Past, Present, and Future of your situation.",
    features: [
      "3-Card Narrative Spread",
      "Live Video or Audio",
      "Interactive Q&A during session",
      "Digital snapshot & summary"
    ],
    popular: true
  },
  {
    name: "The Celtic Cross",
    price: "₹9,999",
    duration: "60 mins",
    description: "A deep, comprehensive dive into complex situations requiring profound clarity.",
    features: [
      "10-Card Traditional Spread",
      "In-depth psychological profiling",
      "Live Video or Audio",
      "High-res digital snapshot",
      "Detailed written analysis"
    ]
  },
  {
    name: "Custom Consultation",
    price: "₹12,500",
    duration: "60+ mins",
    description: "An unbound exploratory session tailored entirely to your unique energetic needs.",
    features: [
      "Unlimited pulls within timeframe",
      "Mix of major and minor arcana",
      "Spiritual advising & coaching",
      "Recorded video session (optional)"
    ]
  }
]

const pricingFaqs: FAQItem[] = [
  {
    question: "Do you offer sliding scale pricing?",
    answer: "We reserve limited spots each month for seekers experiencing profound financial hardship. Please reach out via our contact page to inquire about The Sanctuary Fund."
  },
  {
    question: "How do I pay for my session?",
    answer: "Payment is securely processed via Stripe upon booking your session. We accept all major credit cards and Apple Pay."
  },
  {
    question: "What is your refund policy?",
    answer: "If you cancel with more than 24 hours notice, you will receive a full refund. Same-day cancellations are non-refundable to honor the energy and time reserved."
  },
  {
    question: "Do you offer group readings?",
    answer: "Yes, group readings and events are priced differently based on size and location. Please initiate a Custom Consultation request to discuss details."
  }
]

export default function PricingPage() {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 w-full space-y-16">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Invest in Your Journey</h1>
          <p className="text-muted-foreground text-lg max-w-[600px]">
            Transparent energy exchange. Choose the depth of guidance that resonates with your current path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto pt-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`bg-card/40 backdrop-blur flex flex-col ${tier.popular ? 'border-primary border-t-4' : ''}`}>
              <CardHeader>
                {tier.popular && (
                  <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/ {tier.duration}</span>
                </div>
                <CardDescription className="pt-4">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12" variant={tier.popular ? "default" : "outline"} asChild>
                  <Link href={`/book?type=${tier.name.toLowerCase().replace(/ /g, '-')}`}>
                    Select Session
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>

      <FAQ items={pricingFaqs} title="Payment FAQ" description="Common questions about our exchange." />
      <CallToAction />
    </>
  )
}
