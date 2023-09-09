"use client";

import { useGetAllProductsQuery } from "@/store/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactSkeleton from "react-skeleton-state";

const page = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <section className="mt-14 pb-10 px-4 md:mx-auto md:max-w-6xl">
        <div className="mt-10 mb-4 flex items-center justify-between">
          <h3 className="sm:text-2xl font-bold"> Shop </h3>

          <section className="flex items-center space-x-3 text-xs sm:text-sm">
            <Link prefetch href="/" className="font-bold">
              Home
            </Link>{" "}
            <span style={{ color: "#BDBDBD" }}> {" > "} Shop</span>
          </section>
        </div>

        {error && (
          <>
            <div
              style={{ height: "50vh" }}
              className="flex justify-center md:text-base text-xs sm:text-sm text-center "
            >
              <p>
                There was an error loading the products. Click{" "}
                <span onClick={() => location.reload()} className="underline">
                  here
                </span>{" "}
                to refresh or return to{" "}
                <Link  prefetch href="/" className="underline">
                  {" "}
                  Home{" "}
                </Link>
              </p>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-x-2  gap-y-10">
          {isLoading && (
            <>
              <div>
                <ReactSkeleton
                  width={300}
                  height={328}
                  variant="rectangle"
                ></ReactSkeleton>
                <div className="mt-1 pt-2">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
                <div className="mt-1 pt-1">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
              </div>
              <div>
                <ReactSkeleton
                  width={280}
                  height={328}
                  variant="rectangle"
                ></ReactSkeleton>
                <div className="mt-1 pt-2">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
                <div className="mt-1 pt-1">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
              </div>

              <div>
                <ReactSkeleton
                  width={280}
                  height={328}
                  variant="rectangle"
                ></ReactSkeleton>
                <div className="mt-1 pt-2">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
                <div className="mt-1 pt-1">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
              </div>
              <div>
                <ReactSkeleton
                  width={280}
                  height={328}
                  variant="rectangle"
                ></ReactSkeleton>
                <div className="mt-1 pt-2">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
                <div className="mt-1 pt-1">
                  <ReactSkeleton
                    width={200}
                    fontSize={"1rem"}
                    variant="text"
                  ></ReactSkeleton>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-x-2 gap-y-10">
          {products?.data.products.edges.map((e) => (
            <>
              <Link prefetch
                href={`/product/details/${encodeURIComponent(e.node.id)}`}
                key={e.node.title}
              >
                <Image
                  src={e.node.featuredImage?.url}
                  alt={e.node.title}
                  width={261}
                  height={262}
                />

                <p className="text-xs pt-2" style={{ color: "#121212" }}>
                  {" "}
                  {e.node.title}{" "}
                </p>
                <p className="text-xs" style={{ color: "#121212" }}>
                  ${e.node.variants.edges[0].node.price.amount}
                </p>
              </Link>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
