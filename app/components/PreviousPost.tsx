"use client";

import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ShareButtons from "./ShareButtons";



interface NextComponentProps {
    previousPost: {
        _id?: string;
        title: string;
        slug: { current: string };
        description?: string;
        publishedAt?: string;
        mainImage?: {
            asset: {
                url: string;
            };
        };
    };
}


export default function PreviousPost({ previousPost }: NextComponentProps) {
    const router = useRouter();

    if (!previousPost) return null;

    return (
        <div
            className="w-full group cursor-pointer border rounded-lg p-2 hover:bg-gray-100 flex gap-2"
            onClick={() => router.push(`/blog/post/${previousPost.slug.current}`)}
        >
            {previousPost?.mainImage?.asset?.url && (
                <img
                    src={previousPost?.mainImage?.asset?.url}
                    alt={previousPost.title}
                    width={150}
                    height={100}
                    className="rounded"
                />
            )}
            <p className="text-purple-600 font-semibold hover:underline text-xl">
                {previousPost.title}
            </p>
            <div className="flex flex-1 justify-end items-end">
                <FiArrowUpRight
                    size={30}
                    className="text-purple-600 transform transition-transform duration-200 group-hover:scale-110"
                />
            </div>
        </div>
    );
}

