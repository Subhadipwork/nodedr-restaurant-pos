"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-auth";

// The marketing site is a separate project (restrovia-landing). Here "/" just
// sends visitors to the right place: dashboard when signed in, login otherwise.
export default function RootPage() {
  const router = useRouter();
  const { data, isLoading, isError } = useCurrentUser();

  useEffect(() => {
    if (isLoading) return;
    router.replace(!isError && data?.user ? "/dashboard" : "/login");
  }, [isLoading, isError, data, router]);

  return null;
}
