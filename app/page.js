import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Newsletter from "@/components/Newsletter";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <main className="">
      
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Collection />
      <PopularProducts />
      <Newsletter />
      
    </main>
  );
}
