import { BlogDetail } from "@/app/components";
import { getRelatedPosts } from "@/app/lib/getRelatedPosts";
import { client } from "@/app/lib/sanity.client";

export default async function BlogDetailPage({ params }: any) {
  console.log("params", params);

  const slug = params.slug;
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      metaTitle,
      ogImage{
        asset->{
          _id,
          url
        }
      },
      publishedAt,
      updatedAt,
      tags[]->{
        _id,
        title,
        slug
      },
      categories[]->{
        _id, 
        title, 
        slug
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
      faq,
    }`,
    { slug: slug }
  );

  if (!data) return <div>Post not found</div>;

  // Step 2: Fetch previous and next posts using the publishedAt date
  const [previousPost, nextPost] = await Promise.all([
    client.fetch(
      `*[_type == "post" && publishedAt < $publishedAt] | order(publishedAt desc)[0]{
      title,
      slug,
      mainImage{
        asset->{
          url
        }
      }
    }`,
      { publishedAt: data.publishedAt }
    ),
    client.fetch(
      `*[_type == "post" && publishedAt > $publishedAt] | order(publishedAt asc)[0]{
      title,
      slug,
      mainImage{
        asset->{
          url
        }
      }
    }`,
      { publishedAt: data.publishedAt }
    ),
  ]);


  // 🟨 Safely get first category ID
  const categoryId = data?.categories?.[0]?._id || "";

  const relatedPosts = await getRelatedPosts(categoryId, slug);
  console.log("categoryId", categoryId);
  console.log("relatedPosts", relatedPosts); // should be filled now

  return (
    <div className="bg-[#f8fafc]">

      <BlogDetail blogDetail={data} relatedPosts={relatedPosts}
        previousPost={previousPost}
        nextPost={nextPost}
      />

    </div>
  );
}
