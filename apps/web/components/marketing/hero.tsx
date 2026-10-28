"use client";

import { ArrowRight, WifiOff } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ticketLines = [
  { qty: 2, name: "Masala dosa" },
  { qty: 1, name: "Filter coffee" },
  { qty: 1, name: "Paneer tikka" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h1 className="max-w-[14ch] text-5xl leading-[1.02] font-semibold tracking-[-0.035em] text-foreground sm:text-7xl">
            Your whole restaurant, one screen.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Take orders, send them to the kitchen, split the bill and track
            stock. When the internet drops, service carries on and catches up
            by itself.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-12 px-6 text-[15px]" render={<Link href="/signup" />}>
              Create your account
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 px-5 text-[15px]"
              render={<Link href="/login" />}
            >
              Sign in
            </Button>
          </div>
        </div>

        <div className="relative lg:-mr-24">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_-30px_rgba(159,18,57,0.35)]">
            <div className="relative aspect-[1440/900] w-full">
              <Image
                src="/screenshots/pos-light.png"
                alt="Restrovia POS screen with a table's open order"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-top-left"
                priority
              />
            </div>
          </div>

          {/* The one moment on the page: a kitchen ticket dropping onto the rail. */}
          <motion.aside
            aria-label="Example kitchen ticket"
            initial={{ opacity: 0, y: -28, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 left-3 w-56 bg-white px-4 pt-3 pb-5 font-mono text-[12px] text-neutral-800 shadow-[0_18px_40px_-14px_rgba(17,24,39,0.45)] sm:left-[-2.5rem]"
            style={{
              clipPath:
                "polygon(0 0,100% 0,100% 96%,95% 100%,90% 96%,85% 100%,80% 96%,75% 100%,70% 96%,65% 100%,60% 96%,55% 100%,50% 96%,45% 100%,40% 96%,35% 100%,30% 96%,25% 100%,20% 96%,15% 100%,10% 96%,5% 100%,0 96%)",
            }}
          >
            <div className="flex items-baseline justify-between border-b border-dashed border-neutral-300 pb-2">
              <span className="text-sm font-semibold">Table 6</span>
              <span className="text-neutral-500">Kitchen</span>
            </div>
            <ul className="mt-2 space-y-1">
              {ticketLines.map((l) => (
                <li key={l.name} className="flex gap-3">
                  <span className="w-4 text-right">{l.qty}</span>
                  <span>{l.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1.5 border-t border-dashed border-neutral-300 pt-2 text-[11px] text-amber-700">
              <WifiOff className="size-3" aria-hidden />
              Offline. Syncs when back.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
