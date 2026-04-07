import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/98">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/media/tict-logo.png" alt="TICT" className="h-8 sm:h-10 w-auto object-contain dark:invert" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Nav links + CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/read"
              className="transition-colors hover:text-foreground text-foreground/60"
            >
              Readings
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-foreground text-foreground/60"
            >
              Pricing
            </Link>

            <Link
              href="/#about"
              className="transition-colors hover:text-foreground text-foreground/60"
            >
              About
            </Link>
          </nav>

          {/* CTA */}
          <Button asChild size="default">
            <Link href="/book">Book a Session</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
