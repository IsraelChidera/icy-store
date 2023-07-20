'use client'

import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularProducts from "@/components/PopularProducts";
import { useGetAllProductsQuery } from "@/store/productApi";

export default function Home() {

  const {data:allProducts, error, isLoading} = useGetAllProductsQuery();

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
