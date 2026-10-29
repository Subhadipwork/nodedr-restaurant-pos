"use client";

import { use } from "react";
import { KioskApp } from "@/components/kiosk/kiosk-app";
import { I18nProvider } from "@/lib/i18n/context";
import { KIOSK_DEFAULT_LOCALE } from "@/lib/i18n/locales";

export default function KioskPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  // Pinned to the kiosk default and independent of the staff UI's saved language.
  return (
    <I18nProvider fixedLocale={KIOSK_DEFAULT_LOCALE}>
      <KioskApp token={token} />
    </I18nProvider>
  );
}
