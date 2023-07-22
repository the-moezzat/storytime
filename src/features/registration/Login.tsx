/* eslint-disable @typescript-eslint/no-misused-promises */
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";

import { Envelope, Password } from "@phosphor-icons/react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be at most 50 characters long",
    }),
});

export default function Login() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>,
  ) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div className="mx-auto">
      <h1 className="mb-2 scroll-m-20 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Login
      </h1>

      <p className="mb-8 leading-7 text-gray-500 [&:not(:first-child)]:mt-4">
        Login and continue creating. Your creativity awaits.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" mb-2">
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-400">
                      <Envelope size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="h-14 pl-14 text-lg text-gray-700 "
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=" mb-2">
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-400">
                      <Password size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="h-14 pl-14 text-lg text-gray-700 "
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"link"} className="mb-4 p-0 text-blue-400">
            Forget password?
          </Button>
          <Button
            type="submit"
            className="mb-2 h-14 w-full bg-blue-600 text-base transition-all hover:bg-blue-700"
          >
            Continue
          </Button>
        </form>
      </Form>
      <Button
        variant={"outline"}
        className="h-14 w-full text-base text-gray-700"
      >
        {" "}
        <img src="/google-logo.svg" alt="logo" className="mr-2 h-9 w-9" />
        Login with google
      </Button>
      <p className="mt-2 text-center text-gray-500">
        New to storybook?{" "}
        <Link to={"/registration/signup"} className="p-0 text-blue-500">
          Sign up for free
        </Link>
      </p>
    </div>
  );
}
