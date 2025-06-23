import { client } from "./sanity.client";

export async function getRelatedPosts(
  categoryId: string,
  currentPostSlug: string
) {
  const query = `
    *[_type == "post" 
      && slug.current != $currentPostSlug 
      && references($categoryId)][0...3]{
        _id,
        title,
        slug,
        description,
        publishedAt,
        mainImage {
          asset->{ url }
        },
        author->{
          name,
          image {
            asset->{ url }
          }
        }
    }
  `;

  const related = await client.fetch(query, {
    categoryId,
    currentPostSlug,
  });

  // ✅ Fallback: Get recent posts if no related found
  if (related.length === 0) {
    const fallback = await client.fetch(
      `*[_type == "post" && slug.current != $currentPostSlug] | order(publishedAt desc)[0...3]{
        _id,
        title,
        slug,
        description,
        publishedAt,
        mainImage {
          asset->{ url }
        },
        author->{
          name,
          image {
            asset->{ url }
          }
        }
      }`,
      { currentPostSlug }
    );

    return fallback;
  }

  return related;
}
