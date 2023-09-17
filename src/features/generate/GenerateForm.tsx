/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { CircleNotch, Sparkle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import Raw from "@/components/Row";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import useGenerateForm from "./useGenerateForm";
import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import useProfile from "@/hooks/useProfile";

interface GenerateFormProp {
  generate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    {
      prompt: string;
      writing_style: string;
      num_chapters: number;
    },
    unknown
  >;
  isLoading: boolean;
}

function GenerateForm({ generate, isLoading }: GenerateFormProp) {
  const [isDisable, setIsDisable] = useState(true);

  const { profile } = useProfile();

  const { form, onSubmit } = useGenerateForm(
    {
      description:
        "Alex lives in Paris in 2050, where the effects of global warming are making it difficult to find food and water.",
      numberOfChapters: "1",
      tone: "Clear and easily understandable, similar to a young adult novel. Highly descriptive and sometimes long-winded. Similar to the pulse-pounding intensity of J. R. R. Tolkien, or Stephen King or Agatha Christie.",
      title: isDisable ? "Leave AI generate title" : "",
    },
    (values) => {
      if (profile?.credit !== profile?.used_credit)
        generate({
          prompt: values.description,
          writing_style: values.tone,
          num_chapters: Number(values.numberOfChapters),
        });
    },
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <Raw variant="vertical" gap="12px" className="mb-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">
                  Story details
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    className="max-h-60 text-base text-gray-8 max-md:text-sm"
                    {...field}
                  />
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
                <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">
                  Writing Style
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    className="max-h-60 text-base text-gray-8 max-md:max-h-32 max-md:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfChapters"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">
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
                  maximum number of chapters is 5
                </FormDescription>
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
                  <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">
                    Title
                  </FormLabel>
                  <Raw gap="8px" className="items-center">
                    <Switch
                      checked={isDisable}
                      className="max-md:h-5"
                      onCheckedChange={() =>
                        setIsDisable((disable) => !disable)
                      }
                    />
                    <span className="text-sm text-gray-6 ">Leave it to AI</span>
                  </Raw>
                </Raw>

                <FormControl>
                  <Input
                    placeholder="Title of the storybook"
                    {...field}
                    className="h-12 text-base text-gray-8"
                    disabled={isDisable}
                    value={isDisable ? "Leave AI generate title" : field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </Raw>

        <Button
          type="submit"
          className="mt-auto w-full space-x-3 px-6 py-6 text-lg max-md:space-x-2 max-md:px-3 max-md:py-3 max-md:text-sm"
          disabled={profile?.used_credit === profile?.credit || isLoading}
        >
          {isLoading ? (
            <div className=" animate-spin">
              <CircleNotch weight="fill" />
            </div>
          ) : (
            <Sparkle weight="fill" />
          )}
          <span> Generate </span>
        </Button>
      </form>
    </Form>
  );
}

export default GenerateForm;

/* <Raw variant="vertical" gap="12px" className="mb-4">
            <FormField
              control={form.control}
              name="pointOfView"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">
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
                  <FormLabel className="text-base text-gray-7 max-md:text-sm max-sm:text-xs">Tone</FormLabel>
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
                        className="text-base text-gray-7 max-md:text-sm max-sm:text-xs"
                      >
                        comedy
                      </SelectItem>
                      <SelectItem
                        value="kids"
                        className="text-base text-gray-7 max-md:text-sm max-sm:text-xs"
                      >
                        kids
                      </SelectItem>
                      <SelectItem
                        value="romantic"
                        className="text-base text-gray-7 max-md:text-sm max-sm:text-xs"
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
          /> */
