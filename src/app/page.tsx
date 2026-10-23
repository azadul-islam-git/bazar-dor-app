import AllProducts from "@/components/AllProducts";
import Banner from "@/components/homepage/Banner";
import PriceDownToday from "@/components/PriceDownToday";
import PriceUpToday from "@/components/PriceUpToday";

export default function Home() {
  return (
    <div>
      <Banner />
      <PriceUpToday />
      <PriceDownToday />
      <AllProducts />
    </div>
  );
}
