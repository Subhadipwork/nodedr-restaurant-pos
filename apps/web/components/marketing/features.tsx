import { Reveal } from "@/components/marketing/reveal";

const groups = [
  {
    title: "Front of house",
    blurb: "Everything the floor needs to take an order and get paid.",
    items: [
      ["Billing", "Modifiers, combos, split and merge bills, tips, gift cards and several payments on one bill. GST is calculated on tax-inclusive prices."],
      ["Tables and reservations", "A floor plan you can drag around, bookings with a waitlist, table transfers, and a QR code on each table that opens the menu."],
      ["Guests and loyalty", "Customer profiles, points that earn and redeem, gift cards and each guest's visit history."],
    ],
  },
  {
    title: "Kitchen",
    blurb: "Tickets reach the right station without anyone shouting.",
    items: [
      ["Kitchen display", "Orders route to the right station. Reprint a ticket, bump its priority, and see prep time per station."],
      ["Stock and purchasing", "Ingredients with recipe costing, purchase orders, goods received by batch, and waste logged first-in, first-out."],
    ],
  },
  {
    title: "Running the business",
    blurb: "Control who can do what, and keep working when the line goes down.",
    items: [
      ["Works offline", "Orders, bills, kitchen tickets and printing keep going through an outage and sync automatically afterwards."],
      ["Staff permissions", "Switch each permission on or off per person. Every restaurant's data is kept apart from every other's."],
      ["API and MCP", "Let your own website browse the menu, take orders and book tables with a scoped API key, or connect Claude Desktop with your own permissions."],
    ],
  },
];

export function Features() {
  return (
    <section id="features" className="lp-section">
      <div className="lp-wrap">
        <Reveal className="lp-section__head">
          <h2>Built for the dining room and the pass</h2>
          <p className="lp-lead">
            Made for sit-down, takeaway and kitchen service from the start, not a shop till adapted for restaurants.
          </p>
        </Reveal>

        <div className="lp-menu">
          {groups.map((g) => (
            <Reveal key={g.title} className="lp-course">
              <div className="lp-course__head">
                <h3>{g.title}</h3>
                <p className="lp-note">{g.blurb}</p>
              </div>
              <dl className="lp-dishes">
                {g.items.map(([name, text]) => (
                  <div key={name} className="lp-dish">
                    <dt>{name}</dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
