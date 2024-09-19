import { Link } from "@/i18n/routing";
import { formatRupiah } from "@/libs/rupiahFormat";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { FaBath, FaBed, FaMapMarked } from "react-icons/fa";
import { IoIosExpand } from "react-icons/io";

const Property = ({ data }) => {
  const t = useTranslations("property");

  return (
    <div className="border rounded-md overflow-hidden">
      <Link href={`/properties/${data.slug}`}>
        <div className="relative">
          <div className="absolute bottom-4 left-4 px-4 py-2 font-medium text-sm bg-white rounded-md">
            {data.type.name}
          </div>
          <Image
            src={data.thumbnail}
            alt={data.slug}
            width={200}
            height={100}
            className="w-full h-full"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-center mb-3 text-blue-500">
          <FaMapMarked />
          <span className="ms-2">{data.location.name}</span>
        </div>
        <h1 className="font-bold text-xl md:text-2xl mb-3">
          {formatRupiah(data.price.int)}
        </h1>
        <Link href={`/properties/${data.slug}`}>
          <h2 className="font-semibold text-2xl md:text-3xl mb-2 truncate">
            {data.title}
          </h2>
        </Link>
        <p className="text-xs md:text-sm text-slate-500">
          {data.description_title}
        </p>
        <hr className="my-4" />
        <div className="flex justify-between text-blue-500">
          <div className="flex items-center">
            <FaBed />
            <span className="ms-2 text-xs md:text-sm font-medium">
              {data.specification.bedroom + " " + t("bedroom")}
            </span>
          </div>
          <div className="flex items-center">
            <FaBath />
            <span className="ms-2 text-xs md:text-sm font-medium">
              {data.specification.bathroom + " " + t("bathroom")}
            </span>
          </div>
          <div className="flex items-center">
            <IoIosExpand />
            <span className="ms-2 text-xs md:text-sm font-medium">
              {data.specification.land_area} m²
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
