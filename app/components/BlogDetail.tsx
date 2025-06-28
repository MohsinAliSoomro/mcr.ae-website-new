"use client";
import React from 'react'
import { PortableText } from '@portabletext/react';
import PortableTextComponents from './PortableTextComponents';
import RelatedPosts from './RelatedPosts';
import { useRouter } from "next/navigation";
import NextComponent from './NextComponent';
import PreviousPost from './PreviousPost';
import Head from 'next/head';

export default function BlogDetail({ blogDetail, relatedPosts, previousPost, nextPost }: any) {
    const router = useRouter();
    console.log("Detail", blogDetail);


    return (
        <>
            <Head>
                <title>{blogDetail.metaTitle || blogDetail.title}</title>
                <meta name="description" content={blogDetail.description} />
                <meta property="og:title" content={blogDetail.metaTitle || blogDetail.title} />
                <meta property="og:description" content={blogDetail.description} />
                <meta property="og:image" content={blogDetail.ogImage?.asset?.url || blogDetail.mainImage?.asset?.url} />
            </Head>
            <div className="bg-[#fff] w-full py-16 min-h-[20vh] flex flex-col justify-between">
                <div className="flex flex-col justify-center gap-4 px-4">
                    <h1 className="mx-auto font-heading text-4xl w-8/12 text-center font-semibold">
                        {blogDetail.title}
                    </h1>
                    {/* Optional description */}
                    {/* <p className="font-normal text-gray-500 text-center w-full lg:w-[750px] mx-auto">
      ...
    </p> */}
                </div>

                <div className="flex justify-between items-end mx-auto max-w-6xl w-full px-4 mt-10">
                    <p className="font-semibold text-gray-700 text-sm">
                        {blogDetail?.author?.name}
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                        {new Date(blogDetail.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>



            <div className='container mx-auto bg-[#f8fafc]'>

                <main className="flex flex-col px-1 max-w-6xl mx-auto">
                    <>
                        <h2 className="text-4xl w-full md:w-[63%] mb-4 font-semibold text-gray-800 leading-tight mt-10">
                            {blogDetail.title}
                        </h2>
                        <div className='flex justify-between gap-10'>





                            <div className='flex flex-col gap-5 w-full md:w-[63%]'>
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

                            <div className='w-full md:w-[36%] flex flex-col gap-5'>
                                {/* <div className=" ">
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
                                </div> */}
                                <div className=" ">
                                    {/* Show Related Posts */}

                                    <RelatedPosts posts={relatedPosts} />
                                </div>
                            </div>
                        </div>


                        {blogDetail.faq && blogDetail.faq.length > 0 && (
                            <section className="mt-12">
                                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {blogDetail.faq.map((item: any, idx: number) => (
                                        <div key={idx} className="border rounded p-4 bg-gray-50">
                                            <h3 className="font-semibold">{item.question}</h3>
                                            <p className="text-gray-700">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* {blogDetail?.categories?.map((cat: any) => (
                            <span key={cat?._id}>{cat.title}</span>
                        ))} */}

                        {blogDetail?.categories && blogDetail?.categories?.length > 0 && (

                            <div className='mt-12 flex flex-col gap-3'>
                                <div>Tags :</div>
                                <div className='flex flex-wrap gap-2'>
                                    {blogDetail?.tags?.map((tag: any) => (
                                        <span key={tag?._id}
                                            className="bg-gray-100 text-gray-800 text-sm font-medium px-3.5 py-1 rounded"

                                        >{tag?.title}</span>
                                    ))}
                                </div>

                            </div>
                        )}


                    </>

                </main>
                {(previousPost || nextPost) && (
                    <div className="flex justify-between mt-12 pb-8 max-w-6xl mx-auto">
                        {previousPost ? (
                            <div className='flex flex-col justify-start items-start gap-4'>
                                <button
                                    onClick={() => router.push(`/blog/post/${previousPost.slug.current}`)}
                                    className="text-purple-600 hover:underline"
                                >
                                    Previous Post
                                </button>

                                <PreviousPost previousPost={previousPost} />

                            </div>
                        ) : <div />}

                        {nextPost ? (
                            <div className='flex flex-col gap-4 justify-end items-end'>
                                <button
                                    onClick={() => router.push(`/blog/post/${nextPost.slug.current}`)}
                                    className="text-purple-600 hover:underline"
                                >
                                    Next Post
                                </button>
                                <NextComponent nextPost={nextPost} />
                            </div>
                        ) : <div />}
                    </div>
                )}


            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: blogDetail.title,
                        image: blogDetail.ogImage?.asset?.url || blogDetail.mainImage?.asset?.url,
                        author: blogDetail.author?.name,
                        datePublished: blogDetail.publishedAt,
                        description: blogDetail.description,
                        mainEntityOfPage: blogDetail.slug?.current,
                    }),
                }}
            />
            {blogDetail.faq && blogDetail.faq.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: blogDetail.faq.map((f: any) => ({
                                "@type": "Question",
                                name: f.question,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: f.answer,
                                },
                            })),
                        }),
                    }}
                />
            )}

        </>

    )
}
