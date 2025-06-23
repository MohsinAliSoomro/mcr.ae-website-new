// "use client";

// import { useRouter } from "next/navigation";

// interface RelatedPostsProps {
//     posts: {
//         _id: string;
//         title: string;
//         slug: { current: string };
//         description: string;
//         publishedAt: string;
//         categories?: { title: string }[];
//         mainImage?: { asset: { url: string } };
//         author?: {
//             name: string;
//             image?: {
//                 asset?: {
//                     url: string;
//                 };
//             };
//         };
//     }[];
// }

// export default function RelatedPosts({ posts }: RelatedPostsProps) {
//     const router = useRouter();

//     if (!posts || posts.length === 0) return null;

//     return (
//         <div className="">

//             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
//                 {posts.map((post) => (
//                     <div
//                         key={post._id}
//                         onClick={() => router.push(`/blog/post/${post.slug.current}`)}
//                         className="bg-white cursor-pointer shadow-md border border-gray-200 rounded-lg max-w-lg mb-5 transition hover:-translate-y-[3px]"
//                     >
//                         {post.mainImage?.asset?.url && (
//                             <img
//                                 className="rounded-t-lg w-full object-cover h-auto lg:h-[250px]"
//                                 src={post.mainImage.asset.url}
//                                 alt={post.title}
//                             />
//                         )}
//                         <div className="p-5">
//                             <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
//                                 {post.title}
//                             </h5>
//                             <p className="font-normal text-gray-500 mb-6">{post.description}</p>
//                             <div className="flex mt-3">
//                                 <img
//                                     src={
//                                         post.author?.image?.asset?.url ||
//                                         "https://randomuser.me/api/portraits/men/97.jpg"
//                                     }
//                                     className="h-10 w-10 rounded-full mr-2 object-cover"
//                                     alt={post.author?.name}
//                                 />
//                                 <div>
//                                     <p className="font-semibold text-gray-700 text-sm">
//                                         {post.author?.name}
//                                     </p>
//                                     <p className="font-semibold text-gray-400 text-xs">
//                                         {new Date(post.publishedAt).toLocaleDateString("en-US", {
//                                             month: "short",
//                                             day: "numeric",
//                                         })}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client";

import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

interface RelatedPostsProps {
    posts: {
        _id: string;
        title: string;
        slug: { current: string };
        description: string;
        publishedAt: string;
    }[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    const router = useRouter();

    if (!posts || posts.length === 0) return null;

    return (
        <div className="bg-transparent p-4 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Posts</h3>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li
                        key={post._id}
                        className="cursor-pointer"
                        onClick={() => router.push(`/blog/post/${post.slug.current}`)}
                    >
                        <p className="text-purple-600 font-semibold hover:underline text-xl">
                            {post.title}
                        </p>
                        <p className="text-gray-500 text-md mt-1 line-clamp-2">{post.description}</p>
                        <p className="text-gray-400 text-md">
                            {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

