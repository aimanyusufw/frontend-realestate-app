import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  const t = useTranslations("heroSection");

  return (
    <section className="py-24">
      <div className="container">
        <div className="w-full flex flex-wrap-reverse justify-between items-center">
          <div className="w-full md:w-1/2 px-2">
            <span className="font-medium">{t("subHeading")}</span>
            <h1 className="font-bold text-4xl my-5 md:text-5xl lg:text-6xl">
              {t("heading")}{" "}
              <span className="font-playFair">Horizon Homes</span>
            </h1>
            <p className="mb-4 text-xs md:text-sm max-w-md text-slate-500">
              {t("description")}
            </p>
            <div className="flex items-center">
              <Link
                href={"/properties"}
                className="px-6 py-4 font-medium text-sm rounded-full bg-dark-green text-white"
              >
                {t("button")}
              </Link>
              <div className="ms-4">
                <div className="flex gap-2 mb-2">
                  <FaStar className="text-[#FFD700]" />
                  <FaStar className="text-[#FFD700]" />
                  <FaStar className="text-[#FFD700]" />
                  <FaStar className="text-[#FFD700]" />
                  <FaStar className="text-[#FFD700]" />
                </div>
                <h5 className="text-sm">
                  {t("subButton")} <span className="underline">1.000+</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-10 md:mb-0">
            <Image
              priority
              alt="Horizon Homes hero image"
              src={"/hero.svg"}
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
