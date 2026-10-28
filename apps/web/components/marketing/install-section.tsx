import Link from "next/link";
import { Reveal } from "@/components/marketing/reveal";

export function InstallSection() {
  return (
    <section id="get-started" className="lp-section" style={{ paddingBottom: 0 }}>
      <div className="lp-wrap">
        <Reveal className="lp-cta">
          <h2>Set up your menu, tables and staff today</h2>
          <p className="lp-lead">
            Create an account and start taking orders. There is nothing to install or host.
          </p>
          <div className="lp-actions">
            <Link href="/signup" className="lp-btn lp-btn--primary">
              Create your account
            </Link>
            <Link href="/login" className="lp-btn lp-btn--quiet">
              Sign in
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
