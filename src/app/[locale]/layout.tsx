import { VT323 } from "next/font/google"; 
import "../globals.css";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 // Terapkan VT323 font dengan weight yang diperlukan (misalnya 400)
const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400", // Menambahkan properti weight
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className={`${vt323.variable} antialiased`}>
      <NextIntlClientProvider>   

      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      </NextIntlClientProvider>
      </body>
    </html>
  );
}