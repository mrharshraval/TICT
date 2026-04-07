"use client"

import { CallToAction } from "@/components/cta"
import { FAQ } from "@/components/faq"

const allFaqs = [
  {
    question: "How does an online tarot reading work?",
    answer: "Our online tarot readings are conducted via secure video call. The experience is virtually identical to an in-person reading. The reader will shuffle and draw the cards on camera, explain their meanings, and discuss how they relate to your specific questions or situation."
  },
  {
    question: "Do I need to do anything to prepare for my reading?",
    answer: "We recommend taking a few quiet moments before your session to center yourself and think about the areas of your life where you seek clarity. Having a few specific, open-ended questions in mind can be helpful, but it's not strictly necessary. Just bring an open mind and a quiet space where you won't be interrupted."
  },
  {
    question: "How do I choose the right plan or spread?",
    answer: "'The Clarity' is perfect for quick, focused answers on a single matter. 'The Deep Dive' is for those who want to explore multiple dimensions of a complex situation. 'The Year Ahead' is for seekers committed to long-term, guided spiritual growth and understanding broader life cycles."
  },
  {
    question: "Can tarot predict the future?",
    answer: "We believe the cards don't dictate an unchangeable future—they tell your truth as it stands right now. Tarot reflects the current energies and potential trajectories based on the path you are currently walking. It empowers you to make informed decisions and change course if you wish."
  },
  {
    question: "Are your sessions confidential?",
    answer: "Absolutely. Everything discussed during a session is held in the strictest confidence. We provide a safe, non-judgmental space for you to explore your thoughts and feelings."
  },
  {
    question: "How do WhatsApp Query Sessions work?",
    answer: "If you purchase a package that includes WhatsApp support, you can message our dedicated support line anytime. We provide clear, concise spiritual guidance within 72 hours for all queries sent through WhatsApp."
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "We ask for at least 24 hours' notice for cancellations or rescheduling. Sessions cancelled within 24 hours may be subject to a rescheduling fee. No-shows will not be refunded. Please refer to our full Policies page for more details."
  },
  {
    question: "Can I gift a session to someone else?",
    answer: "Yes! We offer digital gift cards for all our sessions. You can book a session on their behalf (provided they know the reading is taking place) or purchase a gift certificate they can redeem later."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-12">
      <div className="container mx-auto px-6 md:px-12 py-16 text-center w-full">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Find clarity on how our readings work, what to expect, and how to get the most out of your spiritual journey with us.
        </p>
      </div>

      <FAQ items={allFaqs} title="" description="" />

      <CallToAction />
    </div>
  )
}
