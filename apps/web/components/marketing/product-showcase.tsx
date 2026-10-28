"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/marketing/reveal";

const views = [
  { id: "dashboard", label: "Dashboard", src: "/screenshots/dashboard-light.png" },
  { id: "pos", label: "POS", src: "/screenshots/pos-light.png" },
  { id: "kds", label: "Kitchen display", src: "/screenshots/kds-light.png" },
  { id: "tables", label: "Tables", src: "/screenshots/tables-light.png" },
] as const;

// Real product screenshots (docs/screenshots/*.png, the same images the
// repo README uses) — not mockups. A crossfade, not a hard cut, when
// switching tabs.
export function ProductShowcase() {
  const [active, setActive] = useState<(typeof views)[number]["id"]>("dashboard");
  const current = views.find((v) => v.id === active)!;

  return (
    <section className="lp-section lp-section--after-hero">
      <div className="lp-wrap">
        <Reveal className="lp-section__head">
          <h2>The real screens</h2>
          <p className="lp-lead">Screenshots of the app itself, one tab per job.</p>
        </Reveal>

        <Reveal className="lp-views">
          <div role="tablist" aria-label="Product views" aria-orientation="vertical" className="lp-views__list">
            {views.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={active === v.id}
                onClick={() => setActive(v.id)}
                className="lp-views__tab"
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="lp-frame">
            <div className="lp-frame__img">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={current.src}
                    alt={`${current.label} screen`}
                    fill
                    sizes="(min-width: 1440px) 960px, 100vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    priority={current.id === "dashboard"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
