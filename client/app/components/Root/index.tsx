"use client";
import { goods as goodsMock } from "@/utils/mocks/goods";
import BrandsLine from "../BrandsLine";
import CatalogPreview from "../CatalogPreview";
import FirstOrderSale from "../FirstOrderSale";
import Header from "../Header";
import Hero from "../Hero";
import DressStyles from "../DressStyles";
import Feedback from "../Feedback";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { product } from "@/utils/functions/request/api/product";

export default function Root() {
  const [goodsData, setGoodsData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await product.getProducts();
      if (response) setGoodsData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <FirstOrderSale />
      <Header />
      <Hero />
      <BrandsLine />
      <CatalogPreview title="Новые поступления" goods={goodsMock} isSeparated />
      <CatalogPreview title="Бестселлеры" goods={goodsMock} />
      <DressStyles />
      <Feedback />
      <Footer />
    </>
  );
}
