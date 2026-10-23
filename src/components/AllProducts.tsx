import { IoGrid } from "react-icons/io5";
import ProductCard, { type IProduct } from "./shared/ProductCard";

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
        <IoGrid className="text-gray-700" />
        সকল পণ্য
      </h2>
      <p className="mb-6">
        মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
