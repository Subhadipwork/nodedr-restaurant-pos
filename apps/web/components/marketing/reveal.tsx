import type { ReactNode } from "react";

// Plain wrapper now: the landing page sections are always visible (no
// scroll-triggered fade). Kept as a component, with `delay` still accepted,
// so existing call sites keep working.
export function Reveal({ className, children }: { className?: string; children: ReactNode; delay?: number }) {
  return <div className={[className].filter(Boolean).join(" ")}>{children}</div>;
}
