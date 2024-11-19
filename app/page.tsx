import {
  AppFeatures,
  FeaturedNetwork,
  Footer,
  Header,
  Hero,
  Performance,
  Protocol,
  Subscribe,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="max-w-screen my-2 overflow-x-hidden lg:my-14">
      <Header />
      <Hero />
      <Protocol />
      <FeaturedNetwork />
      <AppFeatures />
      {/* <Performance /> */}
      <Subscribe />
      <Footer />
    </div>
  );
}
