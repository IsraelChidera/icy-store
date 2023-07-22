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
        queryFn: async () =>
            request(
                'https://mock.shop/api',
                query,
                // variables are type-checked too!               
            ),
    });



    return (
        <section className='mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <p className='text-sm'>
                    Featured Products
                </p>
                <h2 className='font-bold text-xl'>
                    BESTSELLER PRODUCTS
                </h2>
            </div>

            <div className='mt-14 mx-auto max-w-6xl'>
                <div>
                    <div className='md:grid grid-cols-4 gap-x-2 gap-y-10'>
                        {isLoading && (
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
                        {
                            products?.products.edges.map((e) => (
                                <>
                                    <Link href="/product" key={e.node.title}>
                                        <Image
                                            src={e.node.featuredImage?.url}
                                            alt={e.node.title}
                                            width={261}
                                            height={262}
                                        />

                                        <p className='text-xs pt-2' style={{ color: "#121212" }}> {e.node.title} </p>
                                        <p className='text-xs' style={{ color: "#121212" }}>
                                            ${e.node.variants.edges[0].node.price.amount}
                                        </p>
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FeaturedProducts