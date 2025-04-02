import { VT323 } from "next/font/google"; 
import "../globals.css";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${vt323.variable} antialiased bg-gray-950 text-gray-100 min-h-screen w-full max-w-[100vw] overflow-x-hidden`}>
        <NextIntlClientProvider>   
          <Header locale={locale} />
          <main className="pt-16 md:pt-20"> {/* Adjust based on your header height */}
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}