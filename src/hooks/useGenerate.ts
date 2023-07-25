/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMutation } from "react-query";
import { generate } from "../services/GenerateStory";

function useGenerate() {
  const { mutate, data, isLoading, error } = useMutation({
    mutationFn: (prompt: string) => generate(prompt),
    mutationKey: ["story"],
  });

  return { generate: mutate, story: data, isLoading, error };
}

export default useGenerate;
