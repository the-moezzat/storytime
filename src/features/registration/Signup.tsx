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

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters long",
      })
      .max(50, {
        message: "Password must be at most 50 characters long",
      }),
    confirmPassword: z.string().min(6),
    firstName: z.string().min(1, {
      message: "First name must be at least 1 character long",
    }),
    lastName: z.string().min(1, {
      message: "last name must be at least 1 character long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>,
  ) => {
    console.log(values);
  };

  return (
    <div className="mx-auto">
      <h1 className="lg:text-5xl mb-2 scroll-m-20 text-4xl font-bold tracking-tight text-gray-900">
        Sign up
      </h1>

      <p className="mb-8 text-lg leading-7 text-gray-500 [&:not(:first-child)]:mt-4">
        Unlock your limitless creativity and start creating today!
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" flex items-center gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className=" mb-2">
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="h-14 p-4 text-lg text-gray-700 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className=" mb-2">
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="h-14 p-4 text-lg text-gray-700 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" mb-2">
                {/* <FormLabel>Email</FormLabel> */}
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className=" mb-2">
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-400">
                      <Password size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Retype password"
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
          <Button
            type="submit"
            className="my-2 h-14 w-full bg-blue-600 text-base transition-all hover:bg-blue-700"
          >
            Create account
          </Button>
        </form>
      </Form>
      <Button
        variant={"outline"}
        className="h-14 w-full text-base text-gray-700"
      >
        <img src="/google-logo.svg" alt="logo" className="mr-2 h-9 w-9" />
        Sign up with google
      </Button>
      <p className="mt-2 text-center text-gray-500">
        Have an account?
        <Link to={"/registration/login"} className="p-0 text-blue-500">
          Login now
        </Link>
      </p>
    </div>
  );
}
