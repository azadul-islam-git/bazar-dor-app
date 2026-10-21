import Image from "next/image";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import NavbarDate from "../shared/NavbarDate";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex min-h-20 items-center justify-between gap-3 py-3">
          {/* Left: Menu + Logo + Title */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-2">
            {/* Menu button: Mobile and Tablet */}
            <button
              type="button"
              className="btn btn-ghost btn-square shrink-0 lg:hidden"
              aria-label="Open menu"
            >
              <GrMenu size={22} />
            </button>

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
              <h1 className="text-lg font-bold leading-tight sm:text-xl">
                বাজার দর
              </h1>
              <p className="mt-1 text-[10px] text-base-content/70 sm:text-xs">
                <NavbarDate />
              </p>
            </div>
          </div>

          {/* Right: Authentication */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link
              href="/signin"
              className="whitespace-nowrap text-xs font-semibold sm:text-sm md:px-3 md:py-2"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="whitespace-nowrap rounded-lg bg-[#05893E] px-3 py-2 text-xs font-semibold text-white sm:px-5 sm:py-2.5 sm:text-sm"
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
