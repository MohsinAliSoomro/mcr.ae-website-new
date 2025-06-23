import { BlogDetail } from "@/app/components";
import { getRelatedPosts } from "@/app/lib/getRelatedPosts";
import { client } from "@/app/lib/sanity.client";

export default async function BlogDetailPage({ params }: any) {

  const slug = params.slug;
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      publishedAt,
      updatedAt,
      tags,
       categories[]->{
        _id, 
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
      bio
      },
      mainImage{
        asset->{
          _id,
          url
        },
      },
      body[]{
  ...,
  asset->
},
    }`,
    { slug: slug } // ✅ make sure it's an object { slug: value }
  );

  // 🟨 Safely get first category ID
  const categoryId = data?.categories?.[0]?._id || "";

  const relatedPosts = await getRelatedPosts(categoryId, slug);

  return (
    <div className="bg-[#f8fafc]">

      <BlogDetail blogDetail={data} relatedPosts={relatedPosts} />
    </div>
  );
}
