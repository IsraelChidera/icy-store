"use client";

import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FloatingButton from "@/components/FloatingButton";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularProducts from "@/components/PopularProducts";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "@/store/productApi";

export default function Home() {
  const { data: allProducts, error, isLoading } = useGetAllProductsQuery();

  console.log("all: ", allProducts);

  return (
    <main className="relative">
      <Hero />
      <FloatingButton />
      <Categories />
      <FeaturedProducts />
      <Collection />
      <PopularProducts />
      <Newsletter />
    </main>
  );
}
