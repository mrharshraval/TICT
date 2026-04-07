"use client"

import { CallToAction } from "@/components/cta"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-24 w-full">
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Policies & Terms
          </h1>
          <p className="text-lg text-muted-foreground">
            Clear guidelines for our spiritual journey together.
          </p>
        </div>

        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Terms of Service</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                By booking a reading with The Inner Compass, you agree to the following terms and conditions. Our services, including Tarot readings, Reiki, and numerology, are provided for spiritual guidance and entertainment purposes only.
              </p>
              <p>
                We do not offer medical, legal, financial, or professional advice. Our readings should never be used as a substitute for professional counsel. You must be at least 18 years of age to book a reading.
              </p>
              <p>
                We reserve the right to refuse service to anyone, at any time, for any reason, particularly if we feel the client environment is unsafe, disrespectful, or violates these terms.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Cancellation & Rescheduling Policy</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                We value your time and the time of our readers. If you need to cancel or reschedule your appointment, we require a minimum of <strong>24 hours' notice</strong> prior to your scheduled session time.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>More than 24 hours notice:</strong> You may reschedule or cancel your session with no penalty. Refunds process in 3-5 business days.</li>
                <li><strong>Less than 24 hours notice:</strong> Cancellations or requests to reschedule made within 24 hours of the appointment time will incur a 50% rescheduling fee.</li>
                <li><strong>No-Shows:</strong> If you do not show up for your scheduled video call within 15 minutes of the start time, it is considered a no-show. No refunds will be issued for no-shows.</li>
                <li><strong>Late Arrivals:</strong> If you arrive late, the session will still end at the originally scheduled time so as not to delay following clients.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Your privacy and confidentiality are of the utmost importance to us. Any personal information, questions, and circumstances discussed during your reading will be kept strictly confidential. 
              </p>
              <p>
                We do not record video sessions without explicit prior consent. We will never sell, trade, or share your contact information, email address, or reading details with any third parties.
              </p>
              <p>
                Information collected during the booking process is used solely to facilitate your appointments, process payments securely through our trusted payment providers, and occasionally send updates if you have opted into our newsletter.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CallToAction />
    </div>
  )
}
