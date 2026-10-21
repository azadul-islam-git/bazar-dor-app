import Link from "next/link";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async ({ categories }: { categories: ICategory[] }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100 shadow-sm hidden lg:block">
      <div className="mx-auto max-w-7xl overflow-x-auto px-3 sm:px-5 lg:px-8">
        <ul className="flex min-w-max items-center justify-start gap-5 py-3 sm:gap-7 lg:gap-9">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-base-content transition-colors hover:text-[#05893E]"
              >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
