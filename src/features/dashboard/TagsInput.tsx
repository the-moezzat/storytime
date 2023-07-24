/* eslint-disable @typescript-eslint/no-misused-promises */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
// import { EyeClosed } from "@phosphor-icons/react";

const TagsSchema = z.object({ tags: z.array(z.string().min(3).max(20)) });
type TagsSchemaType = z.infer<typeof TagsSchema>;

function TagsInput() {
  const form = useForm<TagsSchemaType>({
    resolver: zodResolver(TagsSchema),
  });

  // const handleChange = (e) => {
  //   form.register("tags", e.target.value);
  // };

  const onSubmit = () => {
    if (!form.formState.errors.tags) {
      console.log("Tags submitted:", form.formState);
    }
  };

  const renderTag = (tag: string) => (
    <li key={tag}>
      <span>{tag}</span>
      {/* <EyeClosed
        onClick={() => form.register("tags", tag, { remove: true })}
      /> */}
    </li>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter tags"
                  {...field}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      form.register("tags", field.value, { add: true });
                    }
                  }}
                />
              </FormControl>
              <ul>{form.formState.tags.map(renderTag)}</ul>
            </FormItem>
          )}
        />
        {errors.tags && (
          <FormMessage>
            Tags must be at least 3 characters and no more than 20 characters
            long.
          </FormMessage>
        )}
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}

export default TagsInput;
