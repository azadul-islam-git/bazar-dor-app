import Link from "next/link";
import React from "react";

const AuthenticationButton = () => {
  return (
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
  );
};

export default AuthenticationButton;
