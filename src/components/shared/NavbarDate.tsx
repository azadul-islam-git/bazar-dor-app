"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const getServerDate = () => "";

const NavbarDate = () => {
  const date = useSyncExternalStore(subscribe, getDate, getServerDate);

  return (
    <span className="mt-1 text-[12px] text-base-content/70 sm:text-xs">
      {date}
    </span>
  );
};

export default NavbarDate;
