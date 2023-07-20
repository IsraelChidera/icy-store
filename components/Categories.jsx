import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

const collectionsQuery = gql`
{
    collections(first: 4) {
      edges {
        node {
          id
          title
          image {
            altText
            url
          }
        }
      }
    }
  }
  
`;

const Categories = () => {

    const { data: collections, isLoading: loadCollections } = useQuery({
        queryKey: ['collections'],
        queryFn: async () => request(
            'https://mock.shop/api',
            collectionsQuery
        )
    });    

    return (
        <section className='mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <h2 className='font-bold text-xl'>
                    YOUR FAVOURITE COLLECTION
                </h2>
                <p className='text-sm'>
                    We give obsessive attention with an intelligent effort.
                </p>
            </div>

            <div className='mt-10 w-3/4 mx-auto '>
                <div className='md:grid grid-cols-4 gap-x-4 '>
                    <div className=' col-span-2 relative'>
                        {
                            collections?.collections?.edges.slice(0, 1).map((c) => (
                                <>
                                    <Image src={c.node.image.url} alt={c.node.title} fill={true} />

                                    <Link className='drop-shadow-xl font-bold text-black absolute bottom-8 left-8 text-2xl decoration-4' href={c.node.id}>
                                        {c.node.title}
                                    </Link>

                                    <p className='text-black flex items-center space-x-2 font-bold border border-black rounded-2xl absolute top-6 right-6 px-4 py-2 text-xs'
                                    >
                                        <span>Shop now</span>
                                        <BsArrowUpRight />
                                    </p>
                                </>
                            ))
                        }

                    </div>

                    <div className='collection-two relative'>
                        {
                            collections?.collections?.edges.slice(1, 2).map((c) => (
                                <>                                    

                                    <Link className='drop-shadow-xl font-bold text-black absolute bottom-8 left-8 text-2xl decoration-4' href={c.node.id}>
                                        {c.node.title}
                                    </Link>

                                    <p className='text-black flex items-center space-x-2 font-bold border border-black rounded-2xl absolute top-6 right-6 px-4 py-2 text-xs'
                                    >
                                        <span>Shop now</span>
                                        <BsArrowUpRight />
                                    </p>
                                </>
                            ))
                        }

                    </div>

                    <div className='flex flex-col space-y-4 justify-between items-'>
                        <div className='collection-three relative'>
                        {
                            collections?.collections?.edges.slice(2, 3).map((c) => (
                                <>
                                    <Image src={c.node.image.url} alt={c.node.title} fill={true} />

                                    <Link className='drop-shadow-xl font-bold text-black absolute bottom-8 left-8 text-2xl decoration-4' href={`collections/${c.node.id}`}>
                                        {c.node.title}
                                    </Link>

                                    <p className='text-black flex items-center space-x-2 font-bold border border-black rounded-2xl absolute top-6 right-6 px-4 py-2 text-xs'
                                    >
                                        <span>Shop now</span>
                                        <BsArrowUpRight />
                                    </p>
                                </>
                            ))
                        }
                        </div>

                        <div className='collection-four relative'>
                        {
                            collections?.collections?.edges.slice(3, 4).map((c) => (
                                <>
                                    <Image src={c.node.image.url} alt={c.node.title} fill={true} />

                                    <Link className='drop-shadow-xl font-bold text-black absolute bottom-8 left-8 text-2xl decoration-4' href={c.node.id}>
                                        {c.node.title}
                                    </Link>

                                    <p className='text-black flex items-center space-x-2 font-bold border border-black rounded-2xl absolute top-6 right-6 px-4 py-2 text-xs'
                                    >
                                        <span>Shop now</span>
                                        <BsArrowUpRight />
                                    </p>
                                </>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories