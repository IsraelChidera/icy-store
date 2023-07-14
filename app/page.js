import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Collection />
    </main>
  );
}
