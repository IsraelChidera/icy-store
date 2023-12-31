
import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Collection />
      <PopularProducts />
      <Newsletter />
    </main>
  );
}
