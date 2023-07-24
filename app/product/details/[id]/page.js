"use client";

import React from "react";
import { useGetSingleProductQuery } from "@/store/productApi";
import Image from "next/image";
import product from "../../../../public/images/Imageproduct.svg";
import product2 from "../../../../public/images/Imageproduct2.svg";
import productFive from "../../../../public/images/productFive.svg";
import productSix from "../../../../public/images/productSix.svg";
import productSeven from "../../../../public/images/productSeven.svg";
import productEight from "../../../../public/images/productEight.svg";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import ReactSkeleton from "react-skeleton-state";

const query = gql`
  {
    products(first: 12) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Page({ params }) {
  const { data: singleProductItem } = useGetSingleProductQuery(`${params.id}`);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["singleProductPage"],
    queryFn: async () =>
      request(
        "https://mock.shop/api",
        query
        // variables are type-checked too!
      ),
  });

  return (
    <>
      <section className="mx-auto max-w-6xl mt-20 pb-10">
        <div className="md:grid grid-cols-6 gap-x-6">
          <div className="col-span-4 space-y-2">
            <div>
              <img
                src={singleProductItem?.data.product.images.edges[0].node.url}
                alt={singleProductItem?.data?.product?.title}
              />
            </div>

            <div className="flex space-x-2 items-center">
              <div>
                <img
                  src={singleProductItem?.data.product.images.edges[0].node.url}
                  alt={singleProductItem?.data?.product?.title}
                />
              </div>

              <div>
                <img
                  src={singleProductItem?.data.product.images.edges[0].node.url}
                  alt={singleProductItem?.data?.product?.title}
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <div className="space-y-4">
              <h1 className="text-2xl">
                {" "}
                {singleProductItem?.data?.product?.title}{" "}
              </h1>
              <p className="text-sm">
                {" "}
                $
                {
                  singleProductItem?.data?.product?.variants?.edges[0].node
                    ?.price?.amount
                }{" "}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs">Quantity</p>

              <div className="mt-3">
                <button className="border py-1 px-2 flex items-center space-x-12">
                  <span>-</span>

                  <span className="text-sm"> 1 </span>

                  <span> + </span>
                </button>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex text-center w-full">
                  <Link
                    href="/cart"
                    className="text-sm py-2 px-4 w-full border border-black"
                  >
                    Add to cart
                  </Link>
                </div>

                <div>
                  <button className="text-sm text-white bg-black py-2 px-4 w-full border border-black">
                    Buy it now
                  </button>
                </div>
              </div>

              <p className="mt-6 text-sm">
                {singleProductItem?.data?.product?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xl"> You may also like </p>

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
            {products?.products.edges.map((e) => (
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
        </div>
      </section>
    </>
  );
}
