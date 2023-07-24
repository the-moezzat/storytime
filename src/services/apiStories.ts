import supabase from "./supabase";

export async function getStories() {
  const { data: stories, error } = await supabase.from("stories").select("*");

  if (error) {
    console.error(error);
    throw new Error("Can't get your stories");
  }

  return stories;
}
