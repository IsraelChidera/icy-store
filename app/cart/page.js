"use client";

import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import ReactSkeleton from "react-skeleton-state";
import CartItems from "@/components/CartItems";
import EmptyCart from "@/components/EmptyCart";
import { useSelector } from "react-redux";

const page = () => {
  const cart = useSelector((state) => state.cart);
  
  const queryForCollectionProducts = gql`
    {
      products(first: 8, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            id
            title
            description
            createdAt
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const {
    data: collectionProducts,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["cartCollectionWithProducts"],
    queryFn: async () => {
      try {
        const response = await request(
          "https://mock.shop/api",
          queryForCollectionProducts
          // variables are type-checked too!
        );
        return response;
      } catch (error) {
        return error;
      }
    },
  });

  return (
    <section className="px-3 md:mx-auto md:max-w-6xl mt-20 pb-10">
      <div className="flex items-end justify-between">
        <h1 className="text-lg"> Your Cart </h1>

        <Link href="/products" className="text-xs underline underline-offset">
          Continue shopping
        </Link>
      </div>

      <div>{cart?.cartItems?.length >  0 ?  <CartItems /> : <EmptyCart />}</div>

      <div className="mt-20">
        <p className="text-xl uppercase"> Recommended for you </p>

        <div className="mt-10 md:grid grid-cols-4 gap-x-4 gap-y-28 ">
          {loading && (
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

          {collectionProducts?.products?.edges?.map((p, i) => (
            <Link
              href={`/product/details/${encodeURIComponent(p.node.id)}`}
              key={i}
            >
              <img
                src={p.node.images?.edges[0].node.url}
                alt="picture of a project"
                className="h-full w-full"
              />

              <p className="text-sm pt-2" style={{ color: "#121212" }}>
                {" "}
                {p.node.title}{" "}
              </p>
              <p className="text-sm" style={{ color: "#121212" }}>
                <span className="">
                  ${p.node.variants?.edges[0].node.price.amount}
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
