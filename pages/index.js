import Head from "next/head";
import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import About from "@/components/common/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d14]">
      <Head>
        <title>MTG Commander Deck Builder</title>
        <meta
          name="description"
          content="Build your perfect Commander deck with our advanced deck builder tool. Search cards, analyze your deck, and share with the community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
    </div>
  );
}
