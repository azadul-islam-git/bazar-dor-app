"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const [name, setName] = useState("");

  // Update profile
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }

    const { error } = await authClient.updateUser({
      name: name.trim(),
    });

    if (error) {
      toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি।");
      return;
    }

    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    router.refresh();
  };

  // Sign out
  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    router.push("/");
    router.refresh();
  };

  // Loading state
  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#07883F]" />
      </main>
    );
  }

  // Not signed in
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-[#202B23]">
          আপনি সাইন ইন করেননি
        </h1>

        <p className="mt-2 text-sm text-[#68736B]">
          প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
        </p>

        <button
          type="button"
          onClick={() => router.push("/signin")}
          className="btn mt-5 rounded-lg border-none bg-[#07883F] text-white hover:bg-[#066F34]"
        >
          সাইন ইন
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#202B23] sm:text-3xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-sm text-[#68736B] sm:text-base">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Header Card */}
        <section className="flex flex-col gap-5 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="avatar shrink-0">
              <div className="relative flex size-18 items-center justify-center overflow-hidden rounded-2xl bg-[#F0F1F0] text-2xl font-semibold text-[#07883F] sm:size-20">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "Profile picture"}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  user.name?.charAt(0).toUpperCase() || "U"
                )}
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold text-[#202B23] sm:text-xl">
                {user.name || "ব্যবহারকারী"}
              </h2>

              <p className="mt-1 break-all text-sm text-[#68736B] sm:text-base">
                {user.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            onClick={handleSignOut}
            className="btn min-h-10 w-full rounded-lg border border-red-400 bg-transparent px-4 text-sm font-medium text-red-500 shadow-none hover:border-red-500 hover:bg-red-50 sm:w-auto sm:shrink-0"
          >
            <FaArrowRightFromBracket className="text-sm" />
            সাইন আউট
          </button>
        </section>

        {/* Profile Information Card */}
        <section className="mt-6 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:p-7 lg:p-8">
          <h2 className="text-lg font-semibold text-[#202B23]">তথ্য</h2>

          <form
            onSubmit={handleUpdateProfile}
            className="mt-8 space-y-4 sm:mt-10 sm:px-4"
          >
            <div>
              <label
                htmlFor="profile-name"
                className="mb-2 block text-sm font-medium text-[#303A33]"
              >
                নাম
              </label>

              <input
                id="profile-name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
                required
                className="input h-10 w-full rounded-lg border-[#DFE7DF] bg-transparent text-sm text-[#202B23] outline-none focus:border-[#07883F] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn min-h-10 w-full rounded-lg border-none bg-[#07883F] text-sm font-semibold text-white shadow-md hover:bg-[#066F34]"
            >
              আপডেট
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
