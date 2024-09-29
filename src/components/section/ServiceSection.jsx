"use client";

import React, { useState } from "react";
import Accordion from "../ui/Accordion";
import { useTranslations } from "next-intl";
import { FaBriefcase, FaHandHoldingUsd, FaUserCog } from "react-icons/fa";

const ServiceSection = () => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const t = useTranslations("serviceSection");

  const accordionItems = [
    "bestPrice",
    "expertAdvice",
    "personalizedService",
    "support",
  ];

  const services = [
    {
      title: "bestPrice",
      icon: <FaHandHoldingUsd className="w-7 h-7" />,
    },
    {
      title: "expertAdvice",
      icon: <FaUserCog className="w-7 h-7" />,
    },
    {
      title: "personalizedService",
      icon: <FaBriefcase className="w-7 h-7" />,
    },
  ];

  const handleButton = (i) => {
    if (accordionOpen === i) return;
    setAccordionOpen(i);
  };

  return (
    <div className="py-12 md:py-24">
      <div className="container">
        <div className="w-full px-2 mb-10">
          <h1 className="font-medium text-4xl mb-4">{t("heading")}</h1>
          <p className="text-xs md:text-sm max-w-md text-slate-500">
            {t("description")}
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 flex flex-wrap mb-10 md:mb-0">
            <div className="w-1/2 p-1">
              <div className="bg-[#FFF5D1] h-full p-4">
                <h3 className="font-semibold text-sm md:text-lg mb-2 text-slate-500 ">
                  {t("statistics.trustedBy.title")}
                </h3>
                <h1 className="font-bold text-4xl xl:text-6xl">
                  {t("statistics.trustedBy.value")}
                </h1>
              </div>
            </div>
            <div className="w-1/2 p-1">
              {services.map((key) => (
                <div
                  key={key.title}
                  className="w-full bg-[#E6F3FF] flex items-center gap-4 px-4 py-5 rounded-md mb-2"
                >
                  <div className="me-2">{key.icon}</div>
                  <h1 className="font-semibold text-sm md:text-base">
                    {t(`services.${key.title}.title`)}
                  </h1>
                </div>
              ))}
            </div>
            <div className="w-full p-1">
              <div className="bg-[#FFE6E6] h-64 w-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl md:text-6xl lg:text-8xl mb-3">
                  {t("statistics.propertiesSold.value")}
                </h1>
                <h3>{t("statistics.propertiesSold.title")}</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2 flex flex-col gap-4">
            {accordionItems.map((data, index) => (
              <Accordion
                data={{
                  title: t(`accordionItems.${data}.title`),
                  value: t(`accordionItems.${data}.content`),
                }}
                isOpen={accordionOpen === index}
                setIsOpen={handleButton}
                index={index}
                key={data}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
