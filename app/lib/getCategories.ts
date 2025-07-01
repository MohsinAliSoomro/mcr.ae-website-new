import { sanityFetch } from "@/app/lib/sanity.client";

export async function getCategories() {
  const categories = await sanityFetch<any[]>({
    query: `*[_type == "category"]{
      _id,
      title,
      slug
    }`,
    tags: ["category"],
  });
  return categories;
}
