"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-base-200 bg-base-100 shadow-sm hidden lg:block">
      <div className="mx-auto max-w-7xl overflow-x-auto px-3 sm:px-5 lg:px-8">
        <ul className="flex min-w-max items-center justify-start gap-2 py-2 lg:gap-2 sm:gap-3">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <li key={category.id}>
                <Link
                  href={href}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#05893E] text-white"
                      : "text-base-content hover:text-[#05893E]"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.nameBn}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
