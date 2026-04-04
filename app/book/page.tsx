"use client"

import { useState } from "react"
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
    question: "What happens if I need to cancel or reschedule?",
    answer: "Please provide at least 24 hours notice if you need to reschedule. We understand life happens, but respectful communication allows us to offer the slot to another seeker."
  },
  {
    question: "Can the cards predict my definite future?",
    answer: "The Tarot does not dictate a fixed future. Instead, it illuminates the current energies and likely trajectories based on your present path. You always retain free will to change your course."
  }
]

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would call a server action or API route
    toast.success("Request received! The Inner Compass will resonate with you shortly.")
    setIsSubmitted(true)
  }

  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 w-full min-h-[60vh]">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
        
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
          <Card className="bg-card/40 backdrop-blur border-t-4 border-t-primary">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl">Request a Reading</CardTitle>
              <CardDescription className="text-base">Provide your details to initiate the journey. We will confirm your session time via email.</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input placeholder="John Doe" required className="h-14 bg-background/50 text-base" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input type="email" placeholder="john@example.com" required className="h-14 bg-background/50 text-base" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm font-medium">Reading Type</label>
                        <Select required>
                          <SelectTrigger className="w-full !h-14 bg-background/50 text-base">
                            <SelectValue placeholder="Select a spread..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">The Daily Draw (15 mins - ₹2,000)</SelectItem>
                            <SelectItem value="three-card">3-Card Spread (30 mins - ₹4,000)</SelectItem>
                            <SelectItem value="celtic-cross">The Celtic Cross (60 mins - ₹9,999)</SelectItem>
                            <SelectItem value="custom">Custom Consultation (60 mins - ₹12,500)</SelectItem>
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
                                "w-full justify-start text-left font-normal h-14 bg-background/50 text-base",
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
                        placeholder="Share your intent, specific questions, or areas of life you'd like to focus on..." 
                        className="min-h-[160px] resize-none bg-background/50"
                      />
                    </div>

                  <Button className="w-full h-14 text-lg group mt-4">
                    <Send className="mr-2 h-5 w-5" />
                    Request Session
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 space-y-6 text-center">
                   <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                      <CheckCircle2 className="h-24 w-24 text-primary relative z-10" />
                   </div>
                   <h3 className="text-3xl font-bold mt-4">Journey Initiated</h3>
                   <p className="text-muted-foreground text-lg max-w-md">Your request has been cast into the universe. We will be in touch shortly to confirm your booking.</p>
                   <Button variant="outline" className="mt-8 h-12 px-8" onClick={() => setIsSubmitted(false)}>
                     Book Another Session
                   </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
      
      <FAQ items={bookingFaqs} title="Booking FAQ" description="Common questions about private sessions." />
    </>
  )
}
