import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-16">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/media/tict-logo.png" alt="TICT" className="h-8 w-8 object-contain dark:invert" />
              <span className="font-bold text-xl tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-[280px]">
              Unlock the wisdom of the cards. Your path to clarity, purpose, and spiritual growth begins here.
            </p>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-foreground text-sm">Services</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/book" className="transition-colors hover:text-foreground w-fit">Private Sessions</Link>
              <Link href="/pricing" className="transition-colors hover:text-foreground w-fit">Pricing & Exchange</Link>
              <Link href="/faq" className="transition-colors hover:text-foreground w-fit">FAQ</Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-foreground text-sm">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-foreground w-fit">{siteConfig.contact.email}</a>
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="transition-colors hover:text-foreground w-fit">{siteConfig.contact.phone}</a>
              <span className="pt-2 text-xs italic">Readings available worldwide via video.</span>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-foreground text-sm">Social</h4>
            <div className="flex gap-4 text-muted-foreground">
              <Link href={siteConfig.links.instagram} target="_blank" className="hover:text-foreground transition-colors p-2 -ml-2 rounded-full hover:bg-secondary/50">
                 <ExternalLink className="h-5 w-5" />
                 <span className="sr-only">Instagram</span>
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary/50">
                 <ExternalLink className="h-5 w-5" />
                 <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar Floor */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
             <Link href="/policies" className="hover:text-foreground transition-colors">Privacy Policy</Link>
             <Link href="/policies" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
