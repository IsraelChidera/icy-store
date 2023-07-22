import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import ReactSkeleton from 'react-skeleton-state';

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

const PopularProducts = () => {

    const { data: collectionProducts, isLoading, error } = useQuery({
        queryKey: ['collectionProducts'],
        queryFn: async () =>
            request(
                'https://mock.shop/api',
                queryForCollectionProducts,
                // variables are type-checked too!               
            ),
    });

    console.log("prod: ", collectionProducts);

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


            <div className='mt-10 md:grid grid-cols-4 gap-x-2 gap-y-16 '>
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
                    collectionProducts?.products.edges.map((p) => (
                        <div className=''>
                            <img
                                src={p.node.images?.edges[0].node.url}
                                alt="picture of a project"
                                className='h-full w-full'
                            //src={p.node.featuredImage?.url}
                            />

                            <p className='text-sm pt-2' style={{ color: "#121212" }}> {p.node.title} </p>
                            <p className='text-sm' style={{ color: "#121212" }}>
                                <span className=''>
                                    ${p.node.variants?.edges[0].node.price.amount}
                                </span>
                            </p>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default PopularProducts