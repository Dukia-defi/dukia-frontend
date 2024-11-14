import { FeaturedNetwork, Header, Hero, Protocol } from "@/components/sections";

export default function Home() {
  return (
    <div className="mx-3 my-2 lg:mx-16 lg:my-14 max-w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Protocol />
      <FeaturedNetwork />
    </div>
  );
}
