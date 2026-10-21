import Image from "next/image";
import Link from "next/link";
import NavbarDate from "../shared/NavbarDate";
import AuthenticationButton from "../button/AuthenticationButton";
import MobileCategoryMenu from "../MobileCategoryMenu";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Navbar = ({ categories }: { categories: ICategory[] }) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex min-h-20 items-center justify-between gap-3 py-3">
          {/* Left: Menu + Logo + Title */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-2">
            {/* Menu button: Mobile and Tablet */}
            <MobileCategoryMenu categories={categories} />

            {/* Logo + Title + Date */}
            <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <Image
                src="/logo-icon.png"
                alt="Bazar-Dor Logo"
                width={24}
                height={24}
                className="box-content shrink-0 rounded-2xl bg-[#05893E] p-3"
              />
            </Link>
            <div className="min-w-0">
              <Link href="/">
                <h1 className="text-lg font-bold leading-tight text-base-content sm:text-xl">
                  বাজার দর
                </h1>
              </Link>
              <p className="mt-1 text-[10px] text-base-content/70 sm:text-xs">
                <NavbarDate />
              </p>
            </div>
          </div>

          {/* Right: Authentication */}
          <AuthenticationButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
