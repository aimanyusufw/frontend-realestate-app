import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Footer from "@/components/global/Footer";
import Navigation from "@/components/global/Navigation";
import NextTopLoader from "nextjs-toploader";
import FavoriteProvider from "@/context/FavoriteProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horzon Homes | Realestate app",
  description: "App to discover properties",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <FavoriteProvider>
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </FavoriteProvider>
      </body>
    </html>
  );
}
