import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-02-19",
  useCdn: process.env.NODE_ENV === "production", // false in preview/dev
  token: process.env.SANITY_API_READ_TOKEN, // Only needed for drafts/preview
});

// Preview client for drafts
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-02-19",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});
