import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider } from "fumadocs-ui/i18n";
import Translations from "@/lib/translations";
const inter = Inter({
  subsets: ["latin"],
});

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: "简体中文",
    locale: "cn",
  },
  {
    name: "English",
    locale: "en",
  },
];

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider
          locale={lang}
          locales={locales}
          translations={Translations[lang as keyof typeof Translations]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
