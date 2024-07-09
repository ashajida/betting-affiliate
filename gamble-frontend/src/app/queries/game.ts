import { client, sanityFetch } from "@/lib/createClient"
import { SanityDocument } from "sanity";

const GET_ALL_GAMES = `*[
  _type == "game"
]{title, image, link }`;

export const getAllGames = async () => {
    try {
    const result = await client.fetch(GET_ALL_GAMES, {},  { cache: 'no-store' })
    return result as Promise<Array<Game>>;
    } catch(e) {
        console.log(e);
    }
}

export const getGame = async (query: string) => {
  const GET_BONUS = `*[_type == "game" &&  title match '${query}*']{title, image, description}`;
  try {
    const result = await client.fetch(GET_BONUS, {},  { cache: 'no-store' })
    return result as  Promise<Array<Game>>;
    } catch(e) {
        console.log(e);
    }
}


