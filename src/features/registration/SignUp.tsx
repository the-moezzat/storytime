/* eslint-disable @typescript-eslint/no-misused-promises */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Envelope, Password } from "@phosphor-icons/react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import RegistrationHeader from "./RegistrationHeader";
import RegistrationFooter from "./RegistrationFooter";
import { useToast } from "@/components/ui/use-toast";
import { signup } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "react-query";

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
  const { toast } = useToast();
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

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(signup, {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user"] }).catch(() => {
        console.log("error");
      });
    },
    onError() {
      toast({
        title: "Uh oh! Something went wrong.",
        variant: "destructive",
      });
    },
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = ({
    firstName,
    lastName,
    email,
    password,
  }: z.infer<typeof formSchema>) => {
    mutate({ firstName, lastName, email, password });
  };

  return (
    <div className="mx-auto">
      <RegistrationHeader
        title="Sign up"
        description="Unlock your limitless creativity and start creating today!"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 max-sm:gap-1"
        >
          <div className="flex items-center gap-2 max-sm:gap-1">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      {...field}
                      className="h-14 p-4 text-lg text-gray-7 "
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
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      {...field}
                      className="h-14 p-4 text-lg text-gray-7 "
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
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-6">
                      <Envelope size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="h-14 pl-14 text-lg text-gray-7 "
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
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-6">
                      <Password size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="h-14 pl-14 text-lg text-gray-7 "
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
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <span className="absolute bottom-0 left-0 top-0 flex items-center pl-4 text-gray-6">
                      <Password size={32} weight="thin" />
                    </span>
                    <Input
                      placeholder="Retype password"
                      type="password"
                      {...field}
                      className="h-14 pl-14 text-lg text-gray-7 "
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 h-14 w-full bg-blue-6 text-base transition-all hover:bg-blue-7"
          >
            Create account
          </Button>
        </form>
      </Form>
      <Button
        variant={"outline"}
        className="text-gray-700 mt-1 h-14 w-full text-base sm:mt-2"
      >
        <img src="/google-logo.svg" alt="logo" className="mr-2 h-9 w-9" />
        Sign up with google
      </Button>
      <RegistrationFooter
        text="Already have an account?"
        linkText="Login now"
        to="/registration/login"
      />
    </div>
  );
}
