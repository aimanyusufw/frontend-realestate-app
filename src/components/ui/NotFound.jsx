import { useTranslations } from "next-intl";
import React from "react";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  const t = useTranslations("notfound");

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <TbError404 className="w-44 h-44 text-dark-green" />
      <h1 className="font-bold text-4xl md:text-5xl text-gray-800 mb-4">
        {t("title")}
      </h1>
      <p className="text-sm text-gray-500 mb-4 text-center">
        {t("description")}
      </p>
    </div>
  );
};

export default NotFound;
