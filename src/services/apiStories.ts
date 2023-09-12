import IBook from "@/types/IBook";
import supabase from "./supabase";

export async function getStories(id: string) {
  const { data: stories, error } = await supabase
    .from("stories")
    .select("*")
    .eq("user_id", id);

  if (error) {
    console.error(error);
    throw new Error("Can't get your stories");
  }

  return stories;
}

export async function addStory(story: IBook) {
  const { data, error } = await supabase.from("stories").insert(story).select();

  if (error) {
    console.error(error);
    throw new Error("Can't add your story");
  }

  return data;
}
