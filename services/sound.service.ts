import { client } from "@/sanity/lib/client";

export const fetchSounds = async () => {
  const query = `*[_type == "sound"] {
    _id,
    name,
    "category": category->name,
    "file": file.asset->url,
    _createdAt
  }`;

  const sounds = await client.fetch(query);
  return sounds;
};
