/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import supabase from "./supabase";

export async function generate(prompt: string) {
  const { data, error } = await supabase.functions.invoke("hello", {
    body: { prompt },
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong");
  }

  return data;
}
