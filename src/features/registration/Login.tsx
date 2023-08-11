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
import RegistrationHeader from "./RegistrationHeader";
import RegistrationFooter from "./RegistrationFooter";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "../../ui/use-toast";
import { login, signInWithGoogle } from "../../services/apiAuth";
import { useMutation } from "react-query";

const formSchema = z.object({
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
});

export default function Login() {
  const navigate = useNavigate();

  const { isLoading, mutate, error } = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      login({ email, password }),
    {
      mutationKey: ["user"],
      onSuccess: () => {
        navigate("/app");
      },
    },
  );

  async function handleGoogle() {
    console.log("google");
    const data = await signInWithGoogle();

    console.log(data);
  }

  if (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "password or email incorrect",
    });
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // void getUser();

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values: z.infer<typeof formSchema>,
  ) => {
    if (isLoading) return;
    mutate({ email: values.email, password: values.password });
  };

  return (
    <div className="mx-auto">
      <RegistrationHeader
        title="Login"
        description="Login and continue creating. Your creativity awaits."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" mb-2">
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
              <FormItem className=" mb-2">
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
          <Link
            className="mb-4 inline-block p-0 text-blue-4 hover:underline"
            to={""}
          >
            Forget password?
          </Link>
          <Button
            type="submit"
            disabled={isLoading}
            className="mb-2 h-14 w-full bg-blue-6 text-base transition-all hover:bg-blue-7"
          >
            Continue
          </Button>
        </form>
      </Form>
      <Button
        variant={"outline"}
        className="h-14 w-full text-base text-gray-8"
        onClick={handleGoogle}
      >
        <img src="/google-logo.svg" alt="logo" className="mr-2 h-9 w-9" />
        Login with google
      </Button>
      <RegistrationFooter
        text="New to storytime?"
        linkText="Sign up for free"
        to="/registration/signup"
      />
    </div>
  );
}
