"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "Ingredients", href: "/inventory" },
  { label: "Suppliers", href: "/inventory/suppliers" },
  { label: "Purchase Orders", href: "/inventory/purchase-orders" },
  { label: "Procurement", href: "/inventory/procurement" },
  { label: "Transfers", href: "/inventory/transfers" },
  { label: "Waste", href: "/inventory/waste" },
];

export function InventoryTabs() {
  const pathname = usePathname();

  // On a phone the tab row scrolls sideways; keep the current tab in view.
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    navRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Inventory sections"
      className="flex gap-1 overflow-x-auto border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {TABS.map((tab) => {
        const isActive =
          tab.href === "/inventory" ? pathname === "/inventory" : pathname?.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "shrink-0 whitespace-nowrap border-b-2 px-3 pb-3 text-sm font-medium transition-colors",
              isActive
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
