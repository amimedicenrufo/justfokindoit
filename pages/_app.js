import "@/styles/globals.css";
import "@/styles/fonts.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { DeckProvider } from "@/lib/context/DeckContext";

// Configuración de la fuente secundaria
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <DeckProvider>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </DeckProvider>
    </SessionProvider>
  );
}
