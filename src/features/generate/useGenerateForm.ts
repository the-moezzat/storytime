import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  description: z.string().min(60, {
    message: "Description must be at least 60 characters long",
  }),
  numberOfChapters: z
    .string()
    .min(1, {
      message: "Number of chapters must be at least 1",
    })
    .max(2, {
      message: "Number of chapters must be at most 13",
    }),
  title: z.string().min(6),
  pointOfView: z.enum(["first", "second", "third"], {
    required_error: "You need to select a point of view.",
  }),
  tone: z.string({
    required_error: "Please select an tone.",
  }),
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
