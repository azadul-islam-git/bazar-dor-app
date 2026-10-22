"use client";

import { useState } from "react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const MobileCategoryMenu = ({ categories }: { categories: ICategory[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="btn btn-ghost btn-square shrink-0"
      >
        {isOpen ? <IoClose size={24} /> : <GrMenu size={22} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 w-64 rounded-xl border border-base-200 bg-base-100 p-3 shadow-xl sm:w-80">
          <ul className="grid grid-cols-2 gap-1">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/category/${category.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg p-3 text-sm font-medium hover:bg-base-200 hover:text-[#05893E]"
                >
                  <span>{category.icon}</span>
                  <span>{category.nameBn}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileCategoryMenu;
