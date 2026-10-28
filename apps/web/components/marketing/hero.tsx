"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ticketLines = [
  { qty: 2, name: "Masala dosa" },
  { qty: 1, name: "Filter coffee" },
  { qty: 1, name: "Paneer tikka" },
];

export function Hero() {
  const [online, setOnline] = useState(true);

  return (
    <section className="lp-hero">
      <div className="lp-wrap">
        <div className="lp-hero__head">
          <h1>Your whole restaurant, one screen.</h1>
          <div className="lp-hero__side">
            <p className="lp-lead">Orders, bills, kitchen and stock, still working offline.</p>
            <div className="lp-actions">
              <Link href="/signup" className="lp-btn lp-btn--primary">
                Create your account
              </Link>
              <Link href="/login" className="lp-btn lp-btn--quiet">
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="lp-hero__stage">
          <div className="lp-frame">
            <div className="lp-frame__img">
              <Image
                src="/screenshots/pos-light.png"
                alt="Restrovia POS screen with a table's open order"
                fill
                sizes="(min-width: 1440px) 1312px, 100vw"
                priority
              />
            </div>
          </div>

          {/* The signature: a kitchen ticket that keeps printing with the internet off. */}
          <div className="lp-ticket-group">
            <aside className="lp-ticket" aria-label="Example kitchen ticket">
              <div className="lp-ticket__head">
                <span>Table 6</span>
                <span>Kitchen</span>
              </div>
              <ul className="lp-ticket__lines">
                {ticketLines.map((l) => (
                  <li key={l.name}>
                    <span>{l.qty}</span>
                    <span>{l.name}</span>
                  </li>
                ))}
              </ul>
              <p className="lp-ticket__state" aria-live="polite">
                {online ? "Sent to the kitchen." : "Offline. Saved here, syncs when back."}
              </p>
            </aside>
            <button
              type="button"
              role="switch"
              aria-checked={online}
              className="lp-switch"
              onClick={() => setOnline((v) => !v)}
            >
              <span className="lp-switch__track" aria-hidden>
                <span className="lp-switch__thumb" />
              </span>
              {online ? "Internet is on" : "Internet is off"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
