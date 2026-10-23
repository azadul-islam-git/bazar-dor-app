"use client";

import { useTransition, useOptimistic } from "react";
import { usePathname, useRouter } from "next/navigation";

const OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "low", label: "দাম: কম থেকে বেশি" },
  { value: "high", label: "দাম: বেশি থেকে কম" },
];

const SortSelect = ({ value }: { value: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useOptimistic(value);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;

    startTransition(() => {
      setSelected(next);
      router.replace(
        next === "default" ? pathname : `${pathname}?sort=${next}`,
        { scroll: false },
      );
    });
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <label htmlFor="sort" className="text-sm text-gray-500">
        সাজান
      </label>
      <select
        id="sort"
        value={selected}
        onChange={handleChange}
        className={`select select-bordered select-sm rounded-lg bg-base-100 text-sm ${
          isPending ? "opacity-60" : ""
        }`}
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
