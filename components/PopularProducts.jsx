'use client'

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import ReactSkeleton from 'react-skeleton-state';
import Link from 'next/link';


const PopularProducts = () => {

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


    const { data: collectionProducts, isLoading: loading, error } = useQuery({
        queryKey: ['collectionWithProducts'],
        queryFn: async () => {
            try {
                const response = await request(
                    'https://mock.shop/api',
                    queryForCollectionProducts,
                    // variables are type-checked too!               
                );
                return response;
            } catch (error) {
                return error;
            }
        }

    });



    return (
        <section className='mx-auto max-w-6xl mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <p className='text-sm'>
                    Popular Products
                </p>
                <h2 className='font-bold text-xl'>
                    LIMITED STOCK DEALS
                </h2>
            </div>


            <div className='mt-10 md:grid grid-cols-4 gap-x-4 gap-y-28 '>
                {loading && (
                    <>
                        <div>
                            <ReactSkeleton width={280} height={328} variant="rectangle"></ReactSkeleton>
                            <div className="mt-1 pt-2">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                            <div className="mt-1 pt-1">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                        </div>
                        <div>
                            <ReactSkeleton width={280} height={328} variant="rectangle"></ReactSkeleton>
                            <div className="mt-1 pt-2">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                            <div className="mt-1 pt-1">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                        </div>

                        <div>
                            <ReactSkeleton width={280} height={328} variant="rectangle"></ReactSkeleton>
                            <div className="mt-1 pt-2">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                            <div className="mt-1 pt-1">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                        </div>
                        <div>
                            <ReactSkeleton width={280} height={328} variant="rectangle"></ReactSkeleton>
                            <div className="mt-1 pt-2">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
                            </div>
                            <div className="mt-1 pt-1">
                                <ReactSkeleton width={200} fontSize={"1rem"} variant="text"></ReactSkeleton>
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

                {
                    collectionProducts?.products?.edges?.map((p,i) => (
                        <Link href={`/product/details/${encodeURIComponent(p.node.id)}`} key={i}>
                            <img
                                src={p.node.images?.edges[0].node.url}
                                alt="picture of a project"
                                className='h-full w-full'
                            />

                            <p className='text-sm pt-2' style={{ color: "#121212" }}> {p.node.title} </p>
                            <p className='text-sm' style={{ color: "#121212" }}>
                                <span className=''>
                                    ${p.node.variants?.edges[0].node.price.amount}
                                </span>
                            </p>
                        </Link>
                    ))
                }

            </div>
        </section>
    )
}

export default PopularProducts