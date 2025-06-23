import { BlogSection } from '@/app/components';
import { client } from "@/app/lib/sanity.client";
import { getCategories } from '../lib/getCategories';

async function getPosts() {
  const data = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      description,
      publishedAt,
      updatedAt,
      tags,
      categories[]->{
        title, slug
      },
      author->{
        name,
        image {
          asset->{
            _id,
            url
          }
        },
        bio,
      },
      mainImage{
        asset->{
          _id,
          url
        },
      },
      body,
    }`
  );
  return data;
}

export default async function Page() {
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <div className='bg-[#f8fafc] min-h-screen'>
      <BlogSection posts={posts} categories={categories} />
    </div>
  );
}



// 'use client';
// import { BlogSection } from '@/app/components'
// import React, { use, useEffect, useState } from 'react'

// export default function page() {
//   const [getData, setData] = useState([])
//   const [categories, setCategories] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       const postData = await getPosts();
//       const categoryData = await getCategories();
//       setData(postData);
//       setCategories(categoryData);
//     }
//     fetchData()
//   }, [])


//   return (
//     <div className='bg-[#f8fafc] min-h-screen'>
//       <BlogSection posts={getData} categories={categories} />
//     </div>

//   )
// }


// import { client } from "@/app/lib/sanity.client";
// import { getCategories } from '../lib/getCategories';

// async function getPosts() {

//   const data = await client.fetch(
//     `*[_type == "post"]{
//       _id,
//       title,
//       slug,
//       description,
//       publishedAt,
//       updatedAt,
//       tags,
//       categories[]->{
//         title, slug
//       },
//       author->{
//         name,
//          image {
//         asset->{
//           _id,
//           url
//         }
//       },
//       bio,
//       },
//       mainImage{
//         asset->{
//           _id,
//           url
//         },
//       },
//       body,


//     }`
//   );
//   return data
// }
