import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/media/tict-logo.png" alt="TICT" className="h-10 sm:h-12 w-auto object-contain dark:invert" />
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
          <Button asChild className="h-12 px-8 text-sm">
            <Link href="/book">Book a Session</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
