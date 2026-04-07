import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  description?: string
}

export function FAQ({ items, title = "Frequently Asked Questions", description = "Find clarity on your journey." }: FAQProps) {
  if (!items || items.length === 0) return null

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 py-2">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  )
}
