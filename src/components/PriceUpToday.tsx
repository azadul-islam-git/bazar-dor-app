import { IoCaretUp } from "react-icons/io5";
import ProductCard, { type IProduct } from "./shared/ProductCard";

const PriceUpToday = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();

  // biggest increases first, top 6
  const products = data
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
        <IoCaretUp className="text-red-600" />
        আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default PriceUpToday;
