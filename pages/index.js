import Head from "next/head";
import Header from "../components/common/header";
import Hero from "../components/common/hero";
import About from "../components/common/about";
import Pricing from "../components/common/pricing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Pricing />
      </main>
    </div>
  );
}
