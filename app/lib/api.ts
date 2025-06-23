import { client } from "./sanity.client";

export async function getPosts() {
  return client.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body
  }`);
}

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body
    }`,
    { slug } // ✅ always pass as { slug: value }
  );
}
