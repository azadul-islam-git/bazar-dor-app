"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoCaretDown, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";

const UserMenu = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const menuRef = useRef<HTMLDetailsElement>(null);
  const router = useRouter();

  const close = () => menuRef.current?.removeAttribute("open");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  const firstName = user.name?.split(" ")[0] || "User";

  const handleSignOut = async () => {
    close();

    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    router.push("/");
    router.refresh();
  };

  return (
    <details ref={menuRef} className="dropdown dropdown-end">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl py-2 px-4 pr-2 transition-colors hover:bg-base-200 sm:pr-3 [&::-webkit-details-marker]:hidden">
        {/* Avatar */}
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={40}
            height={40}
            className="size-9 rounded-xl object-cover sm:size-10"
          />
        ) : (
          <span className="flex size-9 items-center justify-center rounded-full bg-[#05893E] text-base font-semibold text-white sm:size-10">
            {firstName.charAt(0).toUpperCase()}
          </span>
        )}

        <span className="hidden text-sm font-medium text-base-content sm:inline">
          {firstName}
        </span>

        <IoCaretDown className="text-[10px] text-base-content/70" />
      </summary>

      <div className="dropdown-content z-50 mt-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-2xl border border-base-200 bg-base-100 p-4 shadow-lg">
        {/* User info */}
        <div className="border-b border-base-200 pb-3">
          <p className="truncate font-semibold text-gray-900">{user.name}</p>
          <p className="truncate text-xs text-gray-500">{user.email}</p>
        </div>

        {/* Actions */}
        <ul className="mt-2 space-y-1 text-sm">
          <li>
            <Link
              href="/profile"
              onClick={close}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-gray-800 transition-colors hover:bg-base-200"
            >
              <IoPersonOutline className="text-base" />
              আমার প্রোফাইল
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-left text-red-600 transition-colors hover:bg-red-50"
            >
              <IoLogOutOutline className="text-base" />
              সাইন আউট
            </button>
          </li>
        </ul>
      </div>
    </details>
  );
};

export default UserMenu;
