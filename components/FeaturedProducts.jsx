import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

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
                    {isLoading && (<>
                        <div className='flex justify-center items-center mt-4'>
                            <p className='text-center'>
                                loading products . . .
                            </p>
                        </div>
                    </>)}
                    <div className='md:grid grid-cols-4 gap-x-2 gap-y-10'>
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