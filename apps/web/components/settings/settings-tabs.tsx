"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { hasPermission, useCurrentUser } from "@/hooks/use-auth";
import { useNavBadges } from "@/hooks/use-nav-badges";
import { useBranch } from "@/hooks/use-branch";
import { useSettings } from "@/hooks/use-settings";
import { DEMO_MODE } from "@/lib/demo";
import { cn } from "@/lib/utils";
import { NavDot } from "@/components/layout/nav-dot";

interface SettingsTab {
  label: string;
  href: string;
  /** Omit to show the tab to anyone who can reach /settings at all. */
  permission?: string;
  /** Only shown for branches in this country (ISO code). */
  country?: string;
  /** Hidden on the public demo deployment. */
  hideInDemo?: boolean;
}

const TABS: SettingsTab[] = [
  { label: "General", href: "/settings" },
  { label: "Staff", href: "/settings/staff", permission: "users.manage" },
  { label: "Roles", href: "/settings/roles", permission: "roles.manage" },
  { label: "Audit Log", href: "/settings/audit-log", permission: "audit_log.view" },
  { label: "Backup", href: "/settings/backup", permission: "backup.manage" },
  { label: "Updates", href: "/settings/updates", permission: "system.update", hideInDemo: true },
  { label: "Server Sync", href: "/settings/sync", permission: "settings.manage" },
  { label: "API Keys", href: "/settings/api-keys" },
  { label: "Security", href: "/settings/security" },
  { label: "Webhooks", href: "/settings/webhooks", permission: "settings.manage" },
  { label: "VERI*FACTU", href: "/settings/verifactu", permission: "settings.manage", country: "ES" },
];

export function SettingsTabs() {
  const pathname = usePathname();
  const { data } = useCurrentUser();
  const user = data?.user;
  const badges = useNavBadges();
  const { branchId } = useBranch();
  const branchCountry = useSettings(branchId).data?.branch.country;

  // On a phone the tab row scrolls sideways; keep the current tab in view.
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    navRef.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  const visibleTabs = TABS.filter(
    (tab) =>
      !(DEMO_MODE && tab.hideInDemo) &&
      (!tab.permission || hasPermission(user, tab.permission)) &&
      (!tab.country || branchCountry === tab.country),
  );

  return (
    <nav
      ref={navRef}
      aria-label="Settings sections"
      className="flex gap-1 overflow-x-auto border-b border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {visibleTabs.map((tab) => {
        const isActive =
          tab.href === "/settings" ? pathname === "/settings" : pathname?.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex shrink-0 items-center gap-2 whitespace-nowrap border-b-2 px-3 pb-3 text-sm font-medium transition-colors",
              isActive
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
            {badges.settingsTabs[tab.href] ? <NavDot className="ml-0" /> : null}
          </Link>
        );
      })}
    </nav>
  );
}
