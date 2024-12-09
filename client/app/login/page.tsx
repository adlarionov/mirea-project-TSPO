"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/components/form";
import { Input } from "@/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/ui/button";
import { micra } from "@/utils/font";
import classNames from "classnames";
import { auth } from "@/utils/functions/request/api/auth";
import { setToken } from "@/utils/functions/token";
import Link from "next/link";

const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Логин должен содержать минимум 4 символа" }),
  password: z
    .string()
    .min(4, { message: "Пароль должен содержать минимум 4 символа" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async ({
    username,
    password,
  }: z.infer<typeof formSchema>) => {
    const data = await auth.login(username, password);
    form.reset();

    if (!data)
      form.setError("username", {
        message: "Такого пользователя не существует",
      });
    else {
      setToken(data.token);
      location.replace("/");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col gap-8 items-center justify-center">
      <h1
        className={classNames(
          micra.className,
          "textl-xl sm:text-2xl text-center max-w-[350px]"
        )}
      >
        Войти в личный кабинет
      </h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-2 items-center min-w-[325px]"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="username"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 w-[100%]" type="submit">
            Войти
          </Button>
          <Button variant={"ghost"} className="w-[100%] border border-black">
            <Link href={"/register"}>Зарегистрироваться</Link>
          </Button>
        </form>
      </Form>
    </div>
  );
}
