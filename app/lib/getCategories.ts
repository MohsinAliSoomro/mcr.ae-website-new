import { client } from "@/app/lib/sanity.client";

export async function getCategories() {
  const categories = await client.fetch(
    `*[_type == "category"]{
      _id,
      title,
      slug
    }`
  );
  return categories;
}
