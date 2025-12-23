import type { Metadata } from "next";
import { Outfit, Tajawal } from "next/font/google"; // Special fonts
import "./globals.css"; // Relative path fix
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import SmoothScroll from "@/components/layout/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "700", "900"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Al-Bunie Al-Asassie",
  description: "Building the foundation of the future.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir="ltr">
      <body
        className={`${outfit.variable} ${tajawal.variable} antialiased bg-slate-50 text-slate-900 overflow-x-hidden font-sans`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
