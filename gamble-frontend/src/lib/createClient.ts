import "server-only";
import { schemaTypes } from "../../sanity/schemaTypes";
//import { ConfigContext, defineConfig } from "sanity";
import { StructureBuilder } from "sanity/structure";
import imageUrlBuilder from '@sanity/image-url'
import { createClient, type QueryParams } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client =  createClient({
    projectId,
    dataset,
    apiVersion: '2024-03-29',
    useCdn: false
  });


const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
}


export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  });
}