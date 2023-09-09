'use client'

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import ReactSkeleton from 'react-skeleton-state';

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



const FeaturedProducts = () => {

    const { data: products, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const response = await request(
                    'https://mock.shop/api',
                    query
                );
                return response
            } catch (error) {
                return error;
            }
        }

    });


    return (
        <section className='mt-20 pb-10'>
            <div className='mx-auto md:w-1/2 text-center'>
                <p className='md:text-sm text-xs'>
                    Featured Products
                </p>
                <h2 className='font-bold md:text-xl'>
                    BESTSELLER PRODUCTS
                </h2>
            </div>


            <div className='sm:mt-14 mt-4 md:mx-auto md:px-0 px-3 md:max-w-6xl'>
                <div>

                    <div className='grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-x-2  gap-y-10'>
                        {isLoading && (
                            <>
                                <div>
                                    <ReactSkeleton width={300} height={328} variant="rectangle"></ReactSkeleton>
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
                    </div>
                    <div className='grid grid-cols-2 sm:grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-x-2  gap-y-10'>
                        
                        {error && (
                            <>
                                <div className="flex justify-center text-center items-center">
                                    <p>
                                        There was an error loading the products. Return to{" "}
                                        <Link prefetch href="/" className="underline">
                                            home
                                        </Link>
                                    </p>
                                </div>
                            </>
                        )}

                        {
                            products?.products.edges.map((e, i) => (

                                <Link prefetch href={`/product/details/${encodeURIComponent(e.node.id)}`} key={i}>

                                    <img
                                        src={e.node.featuredImage?.url}
                                        alt={e.node.title}
                                        className=''
                                    />

                                    <p className='text-xs pt-2' style={{ color: "#121212" }}> {e.node.title} </p>
                                    <p className='text-xs' style={{ color: "#121212" }}>
                                        ${e.node.variants.edges[0].node.price.amount}
                                    </p>
                                </Link>

                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts