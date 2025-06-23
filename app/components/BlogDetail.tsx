import React from 'react'
import { PortableText } from '@portabletext/react';
import PortableTextComponents from './PortableTextComponents';
import RelatedPosts from './RelatedPosts';

export default function BlogDetail({ blogDetail, relatedPosts }: any) {

    return (
        <div className='container mx-auto bg-[#f8fafc]'>
            <main className="flex flex-col px-1 max-w-6xl mx-auto">
                <>
                    <h2 className="text-4xl mb-4 font-semibold text-gray-800 leading-tight mt-10">
                        {blogDetail.title}
                    </h2>
                    <div className='flex justify-between gap-10'>





                        <div className='flex flex-col gap-5 max-w-screen-md'>
                            <div className="mb-8 md:mb-0 w-full mx-auto relative">


                                <img src={blogDetail?.mainImage?.asset?.url}
                                    className="w-full h-[28em] object-contain rounded-lg shadow-md"
                                />


                            </div>

                            <div className=" flex flex-col lg:flex-row lg:space-x-12 justify-end items-end">

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full ">
                                    <div className="pb-6  prose max-w-none dark:prose-invert ">
                                        <PortableText
                                            value={blogDetail.body}
                                            components={PortableTextComponents} />
                                    </div>


                                </div>



                            </div>
                        </div>

                        <div className='w-full md:w-[32%] flex flex-col gap-5'>
                            <div className=" ">
                                <div className="p-4 border-t border-b md:border md:rounded">
                                    <div className="flex py-2">
                                        <img src={blogDetail?.author?.image?.asset?.url || "https://randomuser.me/api/portraits/men/97.jpg"}
                                            className="h-10 w-10 rounded-full mr-2 object-cover" />
                                        <div>
                                            <p className="font-semibold text-gray-700 text-sm">{blogDetail?.author?.name}</p>
                                            <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                        </div>
                                    </div>
                                    <PortableText value={blogDetail?.author?.bio} components={PortableTextComponents} />

                                    <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                        Follow
                                        <i className='bx bx-user-plus ml-2' ></i>
                                    </button>
                                </div>
                            </div>
                            <div className=" ">
                                {/* Show Related Posts */}

                                <RelatedPosts posts={relatedPosts} />
                            </div>
                        </div>
                    </div>



                </>

            </main>
        </div>
    )
}
