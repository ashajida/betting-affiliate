import { client, sanityFetch } from "@/lib/createClient"
import { SanityDocument } from "sanity";

export const getAllBonuses = async () => {
  const GET_ALL_BONUS = `*[
    _type == "bonus"
  ]{title, image, description}`;

    try {
    const result = await client.fetch(GET_ALL_BONUS)
    return result as Promise<Array<Bonus>>;
    } catch(e) {
        console.log(e);
    }
}

export const getBonus = async (query: string) => { 
  const GET_BONUS = `*[_type == "bonus" &&  title match '${query}*']{title, image, description}`;
  try {
    const result = await client.fetch(GET_BONUS)
    return result as Promise<Array<Bonus>>;
    } catch(e) {
        console.log(e);
    }
}

