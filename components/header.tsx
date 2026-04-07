"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pricing", label: "Pricing"  },
  { href: "/about",   label: "About"    },
  { href: "/faq",     label: "FAQ"      },
]

export function Header() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <img src="/media/tict-logo.png" alt="TICT" className="h-8 sm:h-10 w-auto object-contain dark:invert" />
            <span className="hidden font-semibold sm:inline-block">{siteConfig.name}</span>
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition-colors hover:text-foreground text-foreground/60"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Button asChild size="default">
              <Link href="/book">Book a Session</Link>
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-md text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

        </div>
      </header>

      {/* ── Mobile sheet ────────────────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel — slides in from the right */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-background border-l border-border flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Sheet header — same height as navbar */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <img src="/media/tict-logo.png" alt="TICT" className="h-7 w-auto object-contain dark:invert" />
            <span className="font-semibold text-sm">{siteConfig.name}</span>
          </Link>
          <button
            className="flex items-center justify-center h-9 w-9 rounded-md text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 p-4 flex-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2.5 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="shrink-0 border-t border-border p-4">
          <Button asChild className="w-full">
            <Link href="/book" onClick={() => setOpen(false)}>
              Book a Session
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
