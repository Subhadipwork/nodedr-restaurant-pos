import Link from "next/link";
import { Reveal } from "@/components/marketing/reveal";

const points = [
  ["Locked down by default", "Passwords are hashed with bcrypt, login and PIN attempts are rate-limited, sessions use httpOnly cookies, and every query is scoped to your restaurant."],
  ["The server owns the money", "Prices, tax, discounts and totals are always recalculated on the server. Checkout and refunds stay correct when several people act at once."],
  ["Your data stays yours", "Each restaurant's data is kept apart from every other's, and is never sold or shared. The privacy policy lists hosting and sub-processors."],
  ["Compliance you can read", "Written notes on accessibility and on India's data-protection law, as documents rather than badges."],
];

export function SecuritySection() {
  return (
    <section id="security" className="lp-section lp-band">
      <div className="lp-wrap lp-band__grid">
        <Reveal>
          <h2>Careful with your money and your guests&rsquo; details</h2>
          <p className="lp-lead" style={{ marginTop: 24 }}>
            Each module was audited before launch. The details are below, and the full notes are one click away.
          </p>
          <div className="lp-band__links">
            <Link href="/docs/accessibility">Accessibility statement</Link>
            <Link href="/docs/compliance-india">India compliance notes</Link>
          </div>
        </Reveal>

        <Reveal>
          <dl className="lp-points">
            {points.map(([name, text]) => (
              <div key={name} className="lp-point">
                <dt>{name}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
