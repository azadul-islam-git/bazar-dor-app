"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const handleSignIn = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সফলভাবে সাইন ইন হয়েছে");
      redirect("/");
    }
    if (error) {
      toast.error(
        error.message || "সাইন-ইন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      );
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-10">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#202B23] sm:text-3xl">
          সাইন ইন
        </h1>
        <p className="mt-2 text-sm text-[#68736B]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-103.5 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:p-6">
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="signin-email"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              ইমেইল
            </label>
            <input
              id="signin-email"
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
              htmlFor="signin-password"
              className="mb-1.5 block text-sm font-medium text-[#303A33]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="signin-password"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="current-password"
              required
              className="input h-9 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm outline-none focus:border-[#07883F] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn min-h-9 w-full rounded-lg border-none bg-[#07883F] text-sm font-semibold text-white shadow-md hover:bg-[#066F34]"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-3 text-xs text-[#68736B]">অথবা</div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn h-auto min-h-9 gap-1 rounded-lg border-[#DFE7DF] bg-transparent px-2 text-xs text-[#303A33] shadow-none hover:bg-[#F1F6F1] sm:text-sm"
          >
            <FcGoogle className="shrink-0 text-base" />
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type="button"
            onClick={handleGithubSignIn}
            className="btn h-auto min-h-9 gap-1 rounded-lg border-[#DFE7DF] bg-transparent px-2 text-xs text-[#303A33] shadow-none hover:bg-[#F1F6F1] sm:text-sm"
          >
            <FaGithub className="shrink-0 text-base" />
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Sign-up Link */}
        <p className="mt-4 text-center text-sm text-[#3f4741]">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#05893E] hover:underline"
          >
            সাইন আপ করুন
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

export default SignInPage;
