import supabase from "./supabase";

export async function getUserProfile(id: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", id)
    .single();
  if (error) throw new Error("Can't get your profile");

  return data;
}

export async function updateUsedCredit({
  used_credit,
  user_id,
}: {
  used_credit: number;
  user_id: string;
}) {
  const { data, error } = await supabase
    .from("profiles")
    .update({ used_credit, updated_at: new Date().toISOString() })
    .eq("id", user_id);

  if (error) throw new Error("Can't update your profile");

  return data;
}
