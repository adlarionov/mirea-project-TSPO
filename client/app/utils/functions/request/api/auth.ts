import { AxiosResponse } from "axios";
import { baseIntance, URLs } from "../instance";
import { toast } from "react-hot-toast";

async function login(username: string, password: string) {
  try {
    const { data } = await baseIntance.post<{ token: string }>(URLs.login, {
      username,
      password,
    });
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

async function register(username: string, password: string) {
  try {
    const { data } = await baseIntance.post<
      string,
      AxiosResponse<{ message: string }>
    >(URLs.register, {
      username,
      password,
    });
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

export const auth = { login, register };
