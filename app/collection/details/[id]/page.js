"use client";

import { useGetCollectionWithProductsQuery } from "@/store/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactSkeleton from "react-skeleton-state";

const page = ({ params }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetCollectionWithProductsQuery(params.id);
  
  return (
    <>
      <section className="mt-24 pb-10 mx-auto max-w-6xl">
        <div className="mt-10 mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold">Collection</h3>

          <section className="flex  items-center space-x-3 text-sm">
            <Link href="/" className="font-bold">
              Home
            </Link>{" "}
            <span style={{ color: "#BDBDBD" }}> {" > "} Shop</span>
          </section>
        </div>
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

          {products?.data.collection.products.edges.map((e) => (
            <div key={e.node.title}>
              <Link
                href={`/product/details/${encodeURIComponent(e.node.id)}`}
                key={e.node.title}
              >
                <img
                  src={e?.node?.images?.edges[0].node?.url}
                  alt={e.node.title}
                />

                <p className="text-xs pt-2" style={{ color: "#121212" }}>
                  {" "}
                  {e.node.title}{" "}
                </p>
                <p className="text-xs" style={{ color: "#121212" }}>
                  ${e.node.variants.edges[0].node.price.amount}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
