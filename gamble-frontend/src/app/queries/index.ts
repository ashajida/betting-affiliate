import { client, sanityFetch } from "@/lib/createClient"
import { SanityDocument } from "sanity";

export const getAllByTitle = async (query: string) => {
  const GET_BONUS = `*[_type in ["movie", "person"] && title == ${query}]{title, image, description}`;
  try {
    const result = await client.fetch(GET_BONUS)
    return result;
    } catch(e) {
        console.log(e);
    }
}

