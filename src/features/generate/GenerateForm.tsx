/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { CircleNotch, Sparkle } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import Raw from "../../ui/Row";
import { Textarea } from "../../ui/textarea";
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
import useGenerateForm from "./useGenerateForm";
import axios from "axios";
import { useMutation } from "react-query";
import { objectToQueryString } from "../../utils/helper";

const endpoint = "https://gpt-author-kx2ozxq4oa-uc.a.run.app/generate";

// const body = {
//   prompt:
//     "Alex lives in Paris in 2050, where the effects of global warming are making it difficult to find food and water.",
//   writing_style:
//     "Clear and easily understandable, similar to a young adult novel. Highly descriptive and sometimes long-winded. Similar to the pulse-pounding intensity of J. R. R. Tolkien, or Stephen King or Agatha Christie.",
//   num_chapters: 1,
// };

function GenerateForm() {
  const [isDisable, setIsDisable] = useState(true);

  const { mutate: generate, isLoading } = useMutation(
    (body: { prompt: string; writing_style: string; num_chapters: string }) =>
      axios.post(`${endpoint}?${objectToQueryString(body)}`),
    { mutationKey: ["story"] },
  );

  const { form, onSubmit } = useGenerateForm(
    {
      description: "",
      numberOfChapters: "1",
      tone: "",
      title: isDisable ? "Leave AI generate title" : "",
    },
    (values) => {
      generate({
        prompt: values.description,
        writing_style: values.tone,
        num_chapters: values.numberOfChapters,
      });
    },
  );

  return (
    <div>
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
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-gray-7">
                    Writing Style
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

          {/* <Raw variant="vertical" gap="12px" className="mb-4">
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
                  <FormLabel className="text-base text-gray-7">Tone</FormLabel>
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
          /> */}

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
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className=" animate-spin">
                  <CircleNotch weight="fill" />
                </div>
                <span> Generating </span>
              </>
            ) : (
              <>
                <Sparkle weight="fill" />
                <span> Generate </span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default GenerateForm;
