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
