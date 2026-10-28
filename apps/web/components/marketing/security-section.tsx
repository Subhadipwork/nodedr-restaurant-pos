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
    <section id="security" className="bg-[#111827] px-4 py-24 text-white sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <h2 className="max-w-md text-3xl font-semibold tracking-[-0.025em] sm:text-5xl">
            Careful with your money and your guests&rsquo; details
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/65">
            Each module was audited before launch. The details are below, and the full notes are one click away.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm">
            <Link href="/docs/accessibility" className="w-fit font-medium text-[#FBBF24] underline underline-offset-4">
              Accessibility statement
            </Link>
            <Link href="/docs/compliance-india" className="w-fit font-medium text-[#FBBF24] underline underline-offset-4">
              India compliance notes
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-white/15 border-y border-white/15">
            {points.map(([name, text]) => (
              <div key={name} className="py-6">
                <dt className="text-lg font-medium">{name}</dt>
                <dd className="mt-2 max-w-xl leading-relaxed text-white/65">{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
