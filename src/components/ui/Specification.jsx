import { useTranslations } from "next-intl";
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoIosExpand, IoMdRefresh } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import { FormatRupiahServerComp } from "@/libs/rupiahFormat";
import { TbArrowAutofitWidth, TbCertificate } from "react-icons/tb";

const Specification = ({ specification }) => {
  const t = useTranslations("property.specification");

  return (
    <div className="w-full md:w-auto">
      <h1 className="text-xl md:text-2xl font-semibold mb-5">{t("title")}</h1>
      <div className="flex items-baseline text-blue-500 mb-4">
        <FaBed className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.bedroom} {t("bedroom")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <FaBath className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.bathroom} {t("bathroom")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <IoIosExpand className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.land_area}M² {t("landArea")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <FaHouse className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.building_area}M² {t("buildingArea")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <GiElectric className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.electricity}Volt {t("electricity")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <IoMdRefresh className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.rent_period} / {t("rentPeriod")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <TbArrowAutofitWidth className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {FormatRupiahServerComp(specification.price_per_m2)} {t("pricePerM2")}
        </span>
      </div>
      <div className="flex items-baseline text-blue-500 mb-4">
        <TbCertificate className="w-5 h-5 me-3" />
        <span className="text-xs md:text-sm">
          {specification.certificate} {t("certificate")}
        </span>
      </div>
    </div>
  );
};

export default Specification;
