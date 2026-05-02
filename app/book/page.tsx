"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Compass, Mail, Phone, MapPin, Send, CheckCircle2, CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { FAQ, FAQItem } from "@/components/faq"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { sendBookingEmail } from "@/app/actions/send-email"

const bookingFaqs: FAQItem[] = [
  {
    question: "Do I need to prepare anything before the session?",
    answer: "It is helpful to spend a few minutes in quiet reflection before we begin. If you have specific questions or a general area of life you want to focus on, keeping them in mind will help guide the reading."
  },
  {
    question: "Is the session conducted over video or audio?",
    answer: "Most private sessions are conducted via Zoom (video or audio-only, depending on your comfort level). If you are local, in-person sessions can be arranged at the Sanctuary."
  },
  {
    question: "What happens if I need to reschedule?",
    answer: "We can help reschedule your session, but please note that fees will not be refunded. Respectful communication allows us to find a new slot for you."
  },
  {
    question: "Can the cards predict my definite future?",
    answer: "The Tarot does not dictate a fixed future. Instead, it illuminates the current energies and likely trajectories based on your present path. You always retain free will to change your course."
  }
]

// ─── Extracted Form Component to handle searchParams safely ─── //
function BookingForm() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || undefined

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState<Date>()
  const [selectedType, setSelectedType] = useState<string | undefined>(initialType)

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sync state if url changes via back/forward navigation within the app
  useEffect(() => {
    const t = searchParams.get("type")
    if (t) setSelectedType(t)
    else setSelectedType(undefined)
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const intent = formData.get("intent") as string
    
    const SERVICE_MAP: Record<string, { label: string, price: string }> = {
      "the-clarity": { label: "The Clarity (Tarot)", price: "₹1,599" },
      "the-deep-dive": { label: "The Deep Dive (Tarot)", price: "₹1,999" },
      "the-year-ahead": { label: "Manifestation Package (Tarot)", price: "₹12,000" },
      "sound-healing": { label: "Sound Healing", price: "₹1,999" },
      "reiki-healing": { label: "Reiki Healing", price: "₹999" },
      "full-balancing": { label: "Full Balancing", price: "Custom" },
      "numerical-map": { label: "Numerical Map", price: "₹1,499" },
      "crystal-path": { label: "Crystal Path", price: "Varies" },
    }

    const serviceInfo = selectedType && SERVICE_MAP[selectedType] 
      ? SERVICE_MAP[selectedType] 
      : { label: selectedType || "Not specified", price: "Not specified" }

    const formattedDate = date ? format(date, "PPP") : "Not specified"

    try {
      const result = await sendBookingEmail({
        name,
        email,
        type: serviceInfo.label,
        price: serviceInfo.price,
        date: formattedDate,
        intent
      })

      if (result.success) {
        toast.success("Request received! The Inner Compass will resonate with you shortly.")
        setIsSubmitted(true)
      } else {
        toast.error("Failed to send request. Please try again.")
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
         <div className="relative">
            <CheckCircle2 className="h-10 w-10 text-primary" />
         </div>
         <h3 className="text-xl font-semibold mt-4">Journey Initiated</h3>
         <p className="text-sm text-muted-foreground max-w-md">Your request has been received. We will be in touch shortly to confirm your booking.</p>
         <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
           Book Another Session
         </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium">Full Name</label>
            <Input name="name" className="h-10" placeholder="John Doe" required />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Email Address</label>
            <Input name="email" className="h-10" type="email" placeholder="john@example.com" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium">Reading Type</label>
            <Select required value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full h-10">
                <SelectValue placeholder="Select a spread or service..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="the-clarity">The Clarity (Tarot) - ₹1,599</SelectItem>
                <SelectItem value="the-deep-dive">The Deep Dive (Tarot) - ₹1,999</SelectItem>
                <SelectItem value="the-year-ahead">Manifestation Package (Tarot) - ₹12,000</SelectItem>
                <SelectItem value="sound-healing">Sound Healing - ₹1,999</SelectItem>
                <SelectItem value="reiki-healing">Reiki Healing - ₹999</SelectItem>
                <SelectItem value="full-balancing">Full Balancing - Custom</SelectItem>
                <SelectItem value="numerical-map">Numerical Map - ₹1,499</SelectItem>
                <SelectItem value="crystal-path">Crystal Path - Varies</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) =>
                    date < new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <label className="text-sm font-medium">Your Intention or Question <span className="text-muted-foreground font-normal">(Optional)</span></label>
          <Textarea 
            name="intent"
            placeholder="Share your intent, specific questions, or areas of life you'd like to focus on..." 
            className="min-h-[160px] resize-none bg-background/50"
          />
        </div>

      <Button type="submit" disabled={isSubmitting} className="w-full group mt-4 h-10">
        <Send className="mr-2 h-5 w-5" />
        {isSubmitting ? "Initiating Journey..." : "Request Session"}
      </Button>
    </form>
  )
}

// ─── Main Page Wrapper ─── //
export default function BookingPage() {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 w-full min-h-[60vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full mx-auto">
          
          {/* Context Column (Left) */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32 lg:h-max">
             <div className="space-y-4">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book a Private Session</h1>
               <p className="text-muted-foreground text-lg">
                 Schedule a one-on-one spiritual consultation. Dive deep into the energies surrounding your path and find clarity.
               </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <Card className="bg-secondary/10">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Email Us</h4>
                      <p className="text-xs text-muted-foreground">{siteConfig.contact.email}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/10">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Call Us</h4>
                      <p className="text-xs text-muted-foreground">{siteConfig.contact.phone}</p>
                    </div>
                  </CardContent>
                </Card>
             </div>
          </div>

          {/* Action Column (Right) */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader className="pb-8">
                <CardTitle className="text-xl">Request a Reading</CardTitle>
                <CardDescription className="text-base">Provide your details to initiate the journey. We will confirm your session time via email.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Wrap form component requiring search params in Suspense boundary */}
                <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Loading form...</div>}>
                  <BookingForm />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <FAQ items={bookingFaqs} title="Booking FAQ" description="Common questions about private sessions." />
    </>
  )
}
