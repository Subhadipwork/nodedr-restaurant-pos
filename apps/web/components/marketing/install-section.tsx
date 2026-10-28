import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/marketing/reveal";

export function InstallSection() {
  return (
    <section id="get-started" className="px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-6xl rounded-3xl bg-primary px-8 py-16 text-primary-foreground sm:px-16 sm:py-20">
        <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.025em] sm:text-5xl">
          Set up your menu, tables and staff today
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/80">
          Create an account and start taking orders. There is nothing to install or host.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-medium text-primary transition-opacity hover:opacity-90"
          >
            Create your account
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12 items-center rounded-xl border border-white/40 px-6 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
          >
            Sign in
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
