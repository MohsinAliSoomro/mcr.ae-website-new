import { BlogSection } from '@/app/components';
import { client } from "@/app/lib/sanity.client";
import { getCategories } from '../lib/getCategories';

async function getPosts() {
  const data = await client.fetch(
    `*[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc){
      _id,
      title,
      slug,
      description,
      publishedAt,
      updatedAt,
      tags[]->{
        _id,
        title,
        slug
      },
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
