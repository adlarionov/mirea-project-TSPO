import { baseIntance, URLs } from "../instance";
import { toast } from "react-toastify";

async function login(username: string, password: string) {
  try {
    const { data } = await baseIntance.post<{ token: string }>(URLs.login, {
      username,
      password,
    });
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast(reqError, { type: "error", position: "top-right" });
    return null;
  }
}

async function register(username: string, password: string) {
  try {
    const { data } = await baseIntance.post<string>(URLs.register, {
      username,
      password,
    });
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast(reqError, { type: "error", position: "top-right" });
    return null;
  }
}

export const auth = { login, register };
