/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import supabase from "./supabase";

export async function generate(name: string) {
  const { data, error } = await supabase.functions.invoke("generate", {
    body: { name },
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong");
  }

  return data;
}
