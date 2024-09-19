"use client";

import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import React from "react";

const FiltersType = ({ filters, typeProperties, loadings }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleButton = (value) => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("type", value);
    router.replace(`?${currentParams.toString()}`);
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          onClick={() => handleButton("")}
          className={`${
            filters.type === "" && "bg-dark-green text-white"
          } px-4 py-2 rounded-md text-sm font-medium border`}
          href={"/properties"}
        >
          {loadings.typeProperties ? (
            <FaSpinner className="w-5 h-5 animate-spin" />
          ) : (
            "All"
          )}
        </button>
        {typeProperties?.data?.map((data) => (
          <button
            href={`?type=${data.slug}`}
            onClick={() => handleButton(data.slug)}
            key={data.slug}
            className={`${
              filters.type === data.slug && "bg-dark-green text-white"
            } px-4 py-2 rounded-md text-sm font-medium border`}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersType;
