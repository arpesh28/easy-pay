"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function SignUpForm() {
  const [showPass, setShowPass] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const router = useRouter();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="rounded-xl h-12 border-gray-200 border">
                <Input
                  placeholder="Enter your First Name"
                  className="placeholder-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="rounded-xl h-12 border-gray-200 border">
                <Input
                  placeholder="Enter your Last Name"
                  className="placeholder-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="rounded-xl h-12 border-gray-200 border">
                <Input
                  placeholder="Enter your email"
                  className="placeholder-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="rounded-xl h-12 border-gray-200 border ">
                <>
                  <Input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    className="placeholder-gray-50"
                    {...field}
                  />
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            type="submit"
            className="w-full mt-6 rounded-2xl h-12"
            onClick={(e) => router.replace("/dashboard")}
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
