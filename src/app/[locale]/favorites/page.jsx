"use client";

import Property from "@/components/cards/Property";
import NotFound from "@/components/ui/NotFound";
import useMyFavorites from "@/hooks/useMyFavorite";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("favoritesPage");

  const { myFavorites } = useMyFavorites();

  return (
    <section className="pt-24 md:pt-32 pb-16 min-h-screen">
      <div className="container">
        <div className="w-full px-2">
          <h1 className="font-semibold text-3xl md:text-4xl mb-4">
            {t("title")}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-md">
            {t("description")}
          </p>
        </div>
        {myFavorites.length > 0 ? (
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {myFavorites.map((data) => (
              <Property data={data} key={data.slug} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
};

export default Page;
