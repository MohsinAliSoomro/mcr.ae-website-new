"use client";

import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ShareButtons from "./ShareButtons";



interface RelatedPostsProps {
    posts: {
        _id: string;
        title: string;
        slug: { current: string };
        description: string;
        publishedAt: string;
        mainImage: {
            asset: {
                url: string;
            };
        };
    }[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    const router = useRouter();

    if (!posts || posts.length === 0) return null;

    return (
        <div className="bg-transparent w-full">
            <h3 className="font-heading text-lg font-semibold text-purple-600 mb-4">Related Articles</h3>
            <div className="space-y-4 ">
                {posts.map((post) => (
                    <div
                        key={post._id}
                        className="w-full group cursor-pointer border rounded-lg p-2 hover:bg-gray-100 flex gap-2"

                        onClick={() => router.push(`/blog/post/${post.slug.current}`)}
                    >
                        <img
                            src={post?.mainImage?.asset?.url}
                            alt="Gary McRae"
                            width={120}
                            height={75}
                            className="rounded"
                        />
                        <p className="text-purple-600 font-semibold hover:underline text-xl">
                            {post.title}
                        </p>
                        <div className="flex flex-1 justify-end items-end">
                            <FiArrowUpRight size={30}
                                className="text-purple-600 transform transition-transform duration-200 group-hover:scale-110"
                            />
                        </div>


                        {/* <p className="text-gray-500 text-md mt-1 line-clamp-2">{post.description}</p>
                        <p className="text-gray-400 text-md">
                            {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                        </p> */}
                    </div>
                ))}
            </div>
            <ShareButtons />
        </div>
    );
}

