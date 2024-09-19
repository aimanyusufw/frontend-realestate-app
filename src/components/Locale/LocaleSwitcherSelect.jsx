"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";
import { FaChevronDown } from "react-icons/fa";

const LocaleSwitcherSelect = ({ children, label, defaultValue }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label
      className={`relative
        ${isPending && "transition-opacity [&:disabled]:opacity-30"}`}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent px-2 focus:ring-0 focus:outline-none text-sm font-medium"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleChange}
      >
        {children}
      </select>
      <FaChevronDown className="inline-block w-2 h-2" />
    </label>
  );
};

export default LocaleSwitcherSelect;
