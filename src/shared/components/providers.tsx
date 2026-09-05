"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useMemo, type PropsWithChildren } from "react";
import { messages, resolveLocale } from "@/i18n/messages";
import { usePreferencesStore } from "@/store/preferences";
import { AppLoader, SmoothScroll } from "./effects/app-effects";

export function AppProviders({ children }: PropsWithChildren) {
  const { locale, setLocale, theme } = usePreferencesStore();

  useEffect(() => {
    const persisted = window.localStorage.getItem("yr-preferences");
    if (!persisted) {
      setLocale(resolveLocale(window.navigator.language));
    }
  }, [setLocale]);

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.classList.toggle(
      "dark",
      theme === "dark" || (theme === "system" && systemDark),
    );
  }, [theme]);

  const dictionary = useMemo(() => messages[locale], [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={dictionary}
      timeZone="UTC"
    >
      {/* <SmoothScroll /> */}
      <AppLoader />
      {children}
    </NextIntlClientProvider>
  );
}
