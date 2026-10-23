import Link from "next/link";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 sm:py-10">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#202B23] sm:text-3xl">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-2 text-sm text-[#68736B]">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-103.5 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:p-6">
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              required
              className="input h-9 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm outline-none focus:border-[#07883F] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="signup-email"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              ইমেইল
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="input h-9 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm outline-none focus:border-[#07883F] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="signup-password"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="signup-password"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="input h-9 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm outline-none focus:border-[#07883F] focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="আবার লিখুন"
              autoComplete="new-password"
              minLength={8}
              required
              className="input h-9 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm outline-none focus:border-[#07883F] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn min-h-9 w-full rounded-lg border-none bg-[#07883F] text-sm font-semibold text-white shadow-md hover:bg-[#066F34]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-3 text-xs text-[#68736B]">অথবা</div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="btn h-auto min-h-9 gap-1 rounded-lg border-[#DFE7DF] bg-transparent px-2 text-xs text-[#303A33] shadow-none hover:bg-[#F1F6F1] sm:text-sm"
          >
            <FcGoogle className="shrink-0 text-base" />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            className="btn h-auto min-h-9 gap-1 rounded-lg border-[#DFE7DF] bg-transparent px-2 text-xs text-[#303A33] shadow-none hover:bg-[#F1F6F1] sm:text-sm"
          >
            <FaGithub className="shrink-0 text-base" />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Sign-in Link */}
        <p className="mt-4 text-center text-sm text-[#303A33]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-medium text-[#07883F] hover:underline"
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      {/* Back Link */}
      <Link
        href="/"
        className="mt-5 flex items-center gap-1.5 text-sm text-[#879189] transition hover:text-[#07883F]"
      >
        <FaArrowLeft className="text-xs" />
        হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

export default SignUpPage;
