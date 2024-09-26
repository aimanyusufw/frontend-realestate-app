import { useTranslations } from "next-intl";
import React from "react";

const page = () => {
  const t = useTranslations("favoritesPage");

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
        </div>{" "}
      </div>
    </section>
  );
};

export default page;
