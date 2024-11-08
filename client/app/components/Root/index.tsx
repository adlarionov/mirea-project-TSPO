import { goods } from "@/utils/mocks/goods";
import BrandsLine from "../BrandsLine";
import CatalogPreview from "../CatalogPreview";
import FirstOrderSale from "../FirstOrderSale";
import Header from "../Header";
import Hero from "../Hero";

export default function Root() {
  return (
    <>
      <FirstOrderSale />
      <Header />
      <Hero />
      <BrandsLine />
      <CatalogPreview title="Новые поступления" goods={goods} isSeparated />
      <CatalogPreview title="Бестселлеры" goods={goods} />
    </>
  );
}
