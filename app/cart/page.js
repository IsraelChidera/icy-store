'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartImage from "../../public/images/cart-image.svg";
import cartImage1 from "../../public/images/cart-image-1.svg";
import cartImage2 from "../../public/images/cart-image-2.svg";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import ReactSkeleton from "react-skeleton-state";

const page = () => {
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
    <section className="mx-auto max-w-6xl mt-20 pb-10">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl"> Your Cart </h1>

        <Link href="/products" className="text-xs underline underline-offset">
          Continue shopping
        </Link>
      </div>

      <div className="mt-10">
        <div className="grid text-sm grid-cols-5 gap-x-4 border-b pb-4">
          <div style={{ color: "#121212" }} className="col-span-3">
            <p> PRODUCT </p>
          </div>

          <div
            style={{ color: "#121212" }}
            className="col-span-2 flex justify-between items-center"
          >
            <p> QUANTITY </p>
            <p> TOTAL </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage2} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-5 gap-x-4">
            <div className="col-span-3 flex items-start space-x-2">
              <Image src={cartImage1} alt="product image added to cart" />
              <div>
                <h3 className="text-sm"> Naomi Mini Wallet </h3>
                <p style={{ color: "#121212" }} className="text-xs">
                  {" "}
                  Color: Cotton Candy{" "}
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  <button className="border py-1 px-2 flex items-center space-x-12">
                    <span>-</span>

                    <span className="text-sm"> 1 </span>

                    <span> + </span>
                  </button>
                </div>

                <AiFillDelete />
              </div>

              <div>
                <p className="text-sm"> $187.00 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end text-right mt-20 w-full">
          <div className="space-y-2">
            <p className="text-xs"> Subtotal: $561.00 CAD </p>
            <p style={{ fontSize: "10px" }}>
              {" "}
              Taxes and shipping calculated at checkout{" "}
            </p>
            <button className="py-2 text-sm bg-black text-white w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <p className="text-xl"> You may also like </p>

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
