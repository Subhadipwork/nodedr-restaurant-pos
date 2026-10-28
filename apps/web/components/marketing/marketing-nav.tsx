"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#get-started", label: "Get started" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lp-nav">
      <div className="lp-wrap">
        <div className="lp-nav__bar">
          <Link href="/" className="lp-brand">
            <Logo size={30} />
            Restrovia
          </Link>

          <nav className="lp-nav__links" aria-label="Page sections">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="lp-nav__actions">
            <Link href="/login" className="lp-btn lp-btn--quiet">
              Sign in
            </Link>
            <Link href="/signup" className="lp-btn lp-btn--primary">
              Get started free
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lp-nav__toggle"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <nav className="lp-nav__sheet" data-open={open} aria-label="Menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link href="/login" className="lp-btn lp-btn--quiet">
            Sign in
          </Link>
          <Link href="/signup" className="lp-btn lp-btn--primary">
            Get started free
          </Link>
        </nav>
      </div>
    </header>
  );
}
