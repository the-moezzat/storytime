import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    description: z.string().min(60, {
      message: "Description must be at least 60 characters long",
    }),
    numberOfChapters: z.string(),
    title: z.string().min(6),
    tone: z.string().min(10, {
      message: "Provide your writing style.",
    }),
  })
  .refine((values) => Number(values.numberOfChapters) < 5, {
    message: "Number of chapters at most 5",
    path: ["numberOfChapters"],
  });

function useGenerateForm(
  defaultValues: z.infer<typeof formSchema>,
  onSubmit: SubmitHandler<z.infer<typeof formSchema>>,
) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return { form, onSubmit };
}

export default useGenerateForm;
