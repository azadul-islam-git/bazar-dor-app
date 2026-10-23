import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IoCaretUp,
  IoCaretDown,
  IoRemove,
  IoChevronForward,
} from "react-icons/io5";
import type { IProduct } from "@/components/shared/ProductCard";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProductDetail extends IProduct {
  category: string;
  categoryNameBn: string;
  yesterday: number;
  markets: IMarket[];
}

const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const changeStyle = {
  up: { Icon: IoCaretUp, text: "text-red-600", word: "বেড়েছে" },
  down: { Icon: IoCaretDown, text: "text-green-600", word: "কমেছে" },
  flat: { Icon: IoRemove, text: "text-gray-500", word: "অপরিবর্তিত" },
} as const;

// whole numbers stay as is (৬২), halves show two decimals (৬৩.৫০)
const toBn = (n: number) =>
  n.toLocaleString("bn-BD", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

const ProductDetails = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IProductDetail[] = await res.json();

  const product = data.find((p) => p.slug === slug);
  if (!product) notFound();

  const {
    nameBn,
    image,
    unit,
    today,
    yesterday,
    change,
    category,
    categoryNameBn,
    markets,
  } = product;

  const unitBn = unitBangla[unit] ?? unit;
  const { Icon, text, word } = changeStyle[change.dir];
  const diff = Math.abs(today - yesterday);

  // market rows sorted by average price, cheapest first
  const rows = markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const lowest = Math.min(...markets.map((m) => m.min));
  const highest = Math.max(...markets.map((m) => m.max));
  const average = Math.round(
    rows.reduce((sum, r) => sum + r.avg, 0) / rows.length,
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-gray-600"
      >
        <Link href="/" className="hover:text-[#05893E]">
          হোম
        </Link>
        <IoChevronForward className="text-xs" />
        <Link href={`/category/${category}`} className="hover:text-[#05893E]">
          {categoryNameBn}
        </Link>
        <IoChevronForward className="text-xs" />
        <span className="text-gray-900">{nameBn}</span>
      </nav>

      {/* Header card */}
      <div className="flex flex-col gap-5 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-4xl sm:size-20 sm:text-5xl">
            {image}
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {nameBn}
            </h1>
            <p className="text-sm text-gray-500">
              প্রতি {unitBn} · {categoryNameBn}
            </p>
            <p className="mt-1 text-sm text-gray-700">
              {change.dir === "flat" ? (
                <>গতকালের তুলনায় আজ দাম অপরিবর্তিত</>
              ) : (
                <>
                  গতকালের তুলনায় আজ দাম <b>{word}</b> · {toBn(diff)} টাকা
                </>
              )}
            </p>
          </div>
        </div>

        {/* Today price box */}
        <div className="rounded-2xl bg-base-200 px-8 py-4 text-center">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-4xl font-bold text-gray-900">{toBn(today)}</p>
          <p className="text-sm text-gray-600">টাকা / {unitBn}</p>
          <p
            className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${text}`}
          >
            <Icon />
            {toBn(Math.abs(change.pct))}%
          </p>
        </div>
      </div>

      {/* Summary + market table */}
      <div className="mt-6 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-base-200 p-4">
            <p className="text-xs text-gray-600">সর্বনিম্ন দাম</p>
            <p className="my-1 text-2xl font-bold text-green-600">
              {toBn(lowest)} <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs text-gray-600">সবচেয়ে কম দামের বাজার</p>
          </div>

          <div className="rounded-2xl border border-base-200 p-4">
            <p className="text-xs text-gray-600">সর্বাধিক দাম</p>
            <p className="my-1 text-2xl font-bold text-red-600">
              {toBn(highest)} <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs text-gray-600">সবচেয়ে বেশি দামের বাজার</p>
          </div>

          <div className="rounded-2xl border border-base-200 p-4">
            <p className="text-xs text-gray-600">গড় দাম</p>
            <p className="my-1 text-2xl font-bold text-green-600">
              {toBn(average)} <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs text-gray-600">প্রতি {unitBn}-এর হিসাবে</p>
          </div>
        </div>

        <h2 className="mb-3 mt-8 text-lg font-semibold text-gray-900">
          বাজারভিত্তিক আজকের দাম
        </h2>

        {/* Desktop / tablet: table */}
        <div className="hidden overflow-hidden rounded-2xl border border-base-200 md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500">
                <th className="px-4 py-3 text-left font-medium">বাজার</th>
                <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>
                <th className="px-4 py-3 text-right font-medium">গড়</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={`${r.market}-${i}`}
                  className="border-t border-base-200 even:bg-base-200/50"
                >
                  <td className="px-4 py-3 text-gray-900">{r.market}</td>
                  <td className="px-4 py-3 text-gray-700">{r.division}</td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {toBn(r.min)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {toBn(r.max)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">
                    {toBn(r.avg)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked list */}
        <ul className="space-y-3 md:hidden">
          {rows.map((r, i) => (
            <li
              key={`${r.market}-${i}`}
              className="rounded-xl border border-base-200 p-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-gray-900">{r.market}</p>
                  <p className="text-xs text-gray-500">{r.division}</p>
                </div>
                <p className="shrink-0 font-semibold text-gray-900">
                  {toBn(r.avg)} টাকা
                </p>
              </div>
              <div className="mt-2 flex justify-between border-t border-base-200 pt-2 text-xs text-gray-600">
                <span>সর্বনিম্ন: {toBn(r.min)} টাকা</span>
                <span>সর্বাধিক: {toBn(r.max)} টাকা</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;
