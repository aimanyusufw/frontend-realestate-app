import { useTranslations } from "next-intl";
import React from "react";

const ContactUsSection = () => {
  const t = useTranslations("contactUsSection");

  return (
    <section className="py-32 bg-dark-green text-white">
      <div className="container">
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-1/2 px-2">
            <h1
              className="text-center font-semibold mb-5 text-4xl md:text-5xl lg:text-6
            xl capitalize"
            >
              {t("title")}
            </h1>
            <p className="text-xs md:text-sm mb-8 text-slate-100 text-center max-w-md mx-auto">
              {t("description")}
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-4 text-sm bg-white font-medium text-black rounded-full">
                {t("button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
