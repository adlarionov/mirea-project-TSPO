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

const formSchema = z.object({
  name: z.string(),
  username: z
    .string()
    .min(4, { message: "Логин должен содержать минимум 4 символа" }),
  password: z
    .string()
    .min(4, { message: "Пароль должен содержать минимум 4 символа" }),
});

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  const handleSubmit = async ({
    name,
    username,
    password,
  }: z.infer<typeof formSchema>) => {
    console.log(name);
    const token = await auth.login(username, password);
  };

  return (
    <div className="h-[100vh] flex flex-col gap-8 items-center justify-center">
      <div className="flex max-w-[410px] items-center flex-col">
        <h1 className={classNames(micra.className, "text-2xl text-center ")}>
          Зарегистрируйтесь
        </h1>
        <p>и получите скидку 20% на первый заказ</p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-2 items-center min-w-[325px]"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-[100%]">
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </div>
  );
}
