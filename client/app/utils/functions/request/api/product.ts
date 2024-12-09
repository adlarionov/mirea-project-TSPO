// api
import { baseIntance, URLs } from "../instance";
// components
import { toast } from "react-hot-toast";
import { Product } from "@/types/product";

async function getProducts(): Promise<Product[] | null> {
  try {
    const { data } = await baseIntance.get<Product[]>(URLs.products);
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

async function getProduct(productId: number): Promise<Product | null> {
  try {
    const { data } = await baseIntance.get<Product>(
      `URLs.products/${productId}`
    );
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

async function updateProduct(
  productId: number,
  body: Partial<Product>
): Promise<Product | null> {
  try {
    const { data } = await baseIntance.put<Product>(
      `URLs.products/${productId}`,
      body
    );
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

async function addProduct(
  productId: number,
  body: Product
): Promise<Product | null> {
  try {
    const { data } = await baseIntance.post<Product>(
      `URLs.products/${productId}`,
      body
    );
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

async function deleteProduct(productId: number): Promise<string | null> {
  try {
    const { data } = await baseIntance.put<string>(
      `URLs.products/${productId}`
    );
    return data;
  } catch (reqError) {
    if (typeof reqError === "string")
      toast.error(reqError, { position: "top-right" });
    return null;
  }
}

export const product = {
  getProducts,
  getProduct,
  updateProduct,
  addProduct,
  deleteProduct,
};
