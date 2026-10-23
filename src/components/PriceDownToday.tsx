import { IoCaretDown } from "react-icons/io5";
import ProductCard, { type IProduct } from "./shared/ProductCard";

const PriceDownToday = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();

  // biggest drops first (most negative pct), top 6
  const products = data
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
        <IoCaretDown className="text-green-600" />
        আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default PriceDownToday;
