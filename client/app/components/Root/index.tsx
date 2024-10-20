import BrandsLine from "../BrandsLine";
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
    </>
  );
}
