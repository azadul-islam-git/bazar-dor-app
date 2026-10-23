import Image from "next/image";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const ProfilePage = () => {
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
          {/* Avatar and User Info */}
          <div className="flex min-w-0 items-center gap-4">
            <div className="avatar shrink-0">
              <div className="relative h-18 w-18 overflow-hidden rounded-2xl bg-[#F0F1F0] sm:h-20 sm:w-20">
                <Image
                  src="/profile.png"
                  alt="Profile picture"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold text-[#202B23] sm:text-xl">
                Rezwan Ahmed
              </h2>
              <p className="mt-1 break-all text-sm text-[#68736B] sm:text-base">
                rezwanahmed@gmail.com
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            className="btn min-h-10 w-full rounded-lg border border-red-400 bg-transparent px-4 text-sm font-medium text-red-500 shadow-none hover:border-red-500 hover:bg-red-50 sm:w-auto sm:shrink-0"
          >
            <FaArrowRightFromBracket className="text-sm" />
            সাইন আউট
          </button>
        </section>

        {/* Profile Information Card */}
        <section className="mt-6 rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-5 sm:p-7 lg:p-8">
          <h2 className="text-lg font-semibold text-[#202B23]">তথ্য</h2>

          <form className="mt-8 space-y-4 sm:mt-10 sm:px-4">
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
                defaultValue=""
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
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
