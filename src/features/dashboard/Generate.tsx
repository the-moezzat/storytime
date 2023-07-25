/* eslint-disable @typescript-eslint/no-misused-promises */
import { Sparkle } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import Raw from "../../ui/Row";
import { Textarea } from "../../ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "../../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useState } from "react";
import { Switch } from "../../ui/switch";
import { useRef } from "react";
import { ReactEpubViewer } from "react-epub-viewer";

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

function Generate() {
  const [isDisable, setIsDisable] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      numberOfChapters: "1",
      title: isDisable ? "Leave AI generate title" : "",
      pointOfView: "first",
      tone: "kids",
    },
  });

  const viewerRef = useRef(null);

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>,
  ) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-gray-9 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    console.log(values);
  };
  return (
    <div className="grid h-full grid-cols-12 gap-2">
      <div className="col-span-4 rounded-xl bg-white p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <Raw variant="vertical" gap="12px" className="mb-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-gray-7">
                      Story details
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        className="max-h-60 text-base text-gray-8"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <Raw className="justify-between">
                      <FormLabel className="text-base text-gray-7">
                        Title
                      </FormLabel>
                      <Raw gap="8px" className="items-center">
                        <Switch
                          checked={isDisable}
                          onCheckedChange={() =>
                            setIsDisable((disable) => !disable)
                          }
                        />
                        <span className="text-sm font-medium text-gray-6">
                          Leave it to AI
                        </span>
                      </Raw>
                    </Raw>
                    <FormControl>
                      <Input
                        placeholder="Title of the storybook"
                        {...field}
                        className="h-12 text-base text-gray-8"
                        disabled={isDisable}
                        value={
                          isDisable ? "Leave AI generate title" : field.value
                        }
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </Raw>

            <Separator
              orientation="horizontal"
              className="mx-auto mb-3 w-11/12"
            />

            <Raw variant="vertical" gap="12px" className="mb-4">
              <FormField
                control={form.control}
                name="pointOfView"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-base text-gray-7">
                      Point of view
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col gap-2"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="first" />
                          </FormControl>
                          <FormLabel className="text-base font-medium text-gray-8">
                            First person plural (we)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="second" />
                          </FormControl>
                          <FormLabel className="text-base font-medium text-gray-8">
                            Second person
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="third" />
                          </FormControl>
                          <FormLabel className="text-base font-medium text-gray-8">
                            Third person
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-gray-7">
                      Tone
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 text-base text-gray-8">
                          <SelectValue placeholder="Select a tone of the storybook" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="comedy"
                          className="text-base text-gray-7"
                        >
                          comedy
                        </SelectItem>
                        <SelectItem
                          value="kids"
                          className="text-base text-gray-7"
                        >
                          kids
                        </SelectItem>
                        <SelectItem
                          value="romantic"
                          className="text-base text-gray-7"
                        >
                          romantic
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Raw>

            <Separator
              orientation="horizontal"
              className="mx-auto mb-3 w-11/12"
            />

            <FormField
              control={form.control}
              name="numberOfChapters"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-gray-7">
                    Number of chapters
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Number of chapters"
                      type="number"
                      {...field}
                      className="h-12 text-base text-gray-8"
                    />
                  </FormControl>
                  <FormDescription>
                    maximum number of chapters is 13
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-auto w-full space-x-3 px-6 py-6 text-lg"
            >
              <Sparkle weight="fill" />
              <span> Generate </span>
            </Button>
          </form>
        </Form>
      </div>
      <div className="col-span-full rounded-xl bg-white">
        <div className="relative h-full">
          <ReactEpubViewer
            url={"/Requiem of Shadows and Whispers.epub"}
            ref={viewerRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Generate;
