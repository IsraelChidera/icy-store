"use client";

import { useGetAllProductsQuery } from "@/store/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactSkeleton from "react-skeleton-state";

const page = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  console.log(products);
  return (
    <>
      <section className="mt-14 pb-10 mx-auto max-w-6xl">
        <div className="md:grid grid-cols-4 gap-x-2 gap-y-10">
          {isLoading && (
            <>
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

          {error && (
            <>
              <div className="flex justify-center text-center items-center">
                <p>
                  There was an error loading the products. Return to{" "}
                  <Link href="/" className="underline">
                    home
                  </Link>
                </p>
              </div>
            </>
          )}

          {products?.data.products.edges.map((e) => (
            <>
              <Link
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
