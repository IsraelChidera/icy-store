"use client";

import React from "react";
import { useGetSingleProductQuery } from "@/store/productApi";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import ReactSkeleton from "react-skeleton-state";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";

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
  const dispatch = useDispatch();
  const { data: singleProductItem } = useGetSingleProductQuery(`${params.id}`);
  const router = useRouter();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["singleProductPage"],
    queryFn: async () => {
      try {
        const response = await request("https://mock.shop/api", query);
        return response;
      } catch (error) {
        return error;
      }
    },
  });

  const handleAddToCart = (productArray) => {
    dispatch(addToCart({ productArray }));   
  };

  return (
    <>
      <section className="mx-auto px-3 md:max-w-6xl mt-20 pb-10">
        <div className="mt-10 mb-4 flex items-center justify-between">
          <h3 className="sm:text-2xl text-base font-bold">Product Details</h3>

          <section className="flex items-center space-x-3 text-xs md:text-sm">
            <Link prefetch href="/" className="font-bold">
              Home
            </Link>{" "}
            <span style={{ color: "#BDBDBD" }}> {" > "} Product</span>
          </section>
        </div>

        <div className="md:grid grid-cols-6 gap-x-6">
          <div className="col-span-4 space-y-2">
            <div>
              {isLoading && (
                <>
                  <div className="hidden md:block">
                    <ReactSkeleton
                      width={760}
                      height={760}
                      variant="rectangle"
                    ></ReactSkeleton>
                    {/* <div className="mt-1 pt-2">
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
                    </div> */}
                  </div>
                </>
              )}

              {isLoading && (
                <>
                  <div className="hidden md:block">
                    <ReactSkeleton
                      width={300}
                      height={300}
                      variant="rectangle"
                    ></ReactSkeleton>
                  </div>
                </>
              )}

              <img
                src={singleProductItem?.data?.product?.images.edges[0].node.url}
                alt={singleProductItem?.data?.product?.title}
              />
            </div>

            {error && (
              <>
                <div
                  style={{ height: "50vh" }}
                  className="flex justify-center md:text-base text-xs sm:text-sm text-center "
                >
                  <p>
                    There was an error loading the products. Click{" "}
                    <span
                      onClick={() => location.reload()}
                      className="underline"
                    >
                      here
                    </span>{" "}
                    to refresh or return to{" "}
                    <Link prefetch href="/" className="underline">
                      {" "}
                      Home{" "}
                    </Link>
                  </p>
                </div>
              </>
            )}

            <div className="hidden md:flex space-x-2 items-center">
              <div>
                {isLoading && (
                  <>
                    <div>
                      <ReactSkeleton
                        width={376}
                        height={376}
                        variant="rectangle"
                      ></ReactSkeleton>
                    </div>
                  </>
                )}
                <img
                  src={
                    singleProductItem?.data?.product?.images?.edges[0].node.url
                  }
                  alt={singleProductItem?.data?.product?.title}
                />
              </div>

              <div>
                {isLoading && (
                  <>
                    <div>
                      <ReactSkeleton
                        width={376}
                        height={376}
                        variant="rectangle"
                      ></ReactSkeleton>
                    </div>
                  </>
                )}
                <img
                  src={
                    singleProductItem?.data?.product?.images?.edges[0].node.url
                  }
                  alt={singleProductItem?.data?.product?.title}
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-4 md:mt-0 ">
            <div className="space-y-4">
              {isLoading && (
                <>
                  <div>
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
              <h1 className="text-base md:text-2xl">
                {" "}
                {singleProductItem?.data?.product?.title}{" "}
              </h1>

              {isLoading && (
                <>
                  <div>
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
              <p className="text-xs md:text-sm">
                {" "}
                $
                {
                  singleProductItem?.data?.product?.variants?.edges[0].node
                    ?.price?.amount
                }{" "}
              </p>
            </div>

            <div className="mt-6">
              <p className="hidden text-xs">Quantity</p>

              <div className="hidden mt-3">
                <button className="border py-1 px-2 flex items-center space-x-12">
                  <span>-</span>

                  <span className="text-sm"> 1 </span>

                  <span> + </span>
                </button>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex text-center w-full">
                  <button
                    onClick={() => handleAddToCart(singleProductItem)}
                    className="text-sm py-2 px-4 w-full border border-black"
                  >
                    Add to cart
                  </button>
                </div>

                <div>
                  <button className="text-sm text-white bg-black py-2 px-4 w-full border border-black">
                    Buy it now
                  </button>
                </div>
              </div>

              <p className="mt-6 text-xs md:text-sm">
                {singleProductItem?.data?.product?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xl"> You may also like </p>

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

          <div className="mt-4 md:mt-0 grid grid-cols-2 sm:grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-x-2  gap-y-10">
            {products?.products.edges.slice(1, 9).map((e) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
