import { notFound } from "next/navigation";
import ProductCard, { type IProduct } from "@/components/shared/ProductCard";
import SortSelect from "@/components/shared/SortSelect";

interface ICategoryProduct extends IProduct {
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
}

const toBn = (n: number) => n.toLocaleString("bn-BD");

const CategoryPage = async ({
  slug,
  sort = "default",
}: {
  slug: string;
  sort?: string;
}) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: ICategoryProduct[] = await res.json();

  const filtered = data.filter((p) => p.category === slug);

  if (filtered.length === 0) notFound();

  const products =
    sort === "low"
      ? [...filtered].sort((a, b) => a.today - b.today)
      : sort === "high"
        ? [...filtered].sort((a, b) => b.today - a.today)
        : filtered;

  const { categoryNameBn, categoryIcon } = products[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      {/* Category header card */}
      <div className="flex items-center gap-4 rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm">
        <span className="text-5xl">{categoryIcon}</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{categoryNameBn}</h1>
          <p className="text-sm text-gray-500">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Sort control */}
      <div className="mt-6 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
        <SortSelect value={sort} />
      </div>

      {/* Count */}
      <p className="mb-4 mt-6 text-sm text-gray-600">
        মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
