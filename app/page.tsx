import {
  AppFeatures,
  FeaturedNetwork,
  Header,
  Hero,
  Protocol,
} from "@/components/sections";

export default function Home() {
  return (
    <div className=" my-2  lg:my-14 max-w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Protocol />
      <FeaturedNetwork />
      <AppFeatures />
    </div>
  );
}
