import { Link } from "@/i18n/routing";
import { formatRupiahServerComp } from "@/libs/rupiahFormat";
import Image from "next/image";
import React from "react";

const Agent = ({ data }) => {
  return (
    <Link href={`/agents/${data.id}`}>
      <div className="border rounded-md p-10 ">
        <div className="flex flex-col md:flex-row items-center ">
          <Image
            src={data.profile_picture}
            alt={data.name}
            width={100}
            height={100}
            className="rounded-full mb-5 md:mb-0"
          />
          <div className="w-full ps-4">
            <h1 className="font-medium text-2xl md:text-4xl mb-2 text-center md:text-start">
              {data.name}
            </h1>
            <p className="font-medium text-xs md:text-sm text-slate-500 text-center md:text-start">
              Member Since {data.joined_date.year}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          <div>
            <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
              Total Properties
            </h1>
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
              {data.total_property}
            </h2>
          </div>
          <div>
            <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
              Total Sold
            </h1>
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
              {data.total_sold_property}
            </h2>
          </div>
          <div>
            <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
              Price Range
            </h1>
            <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
              {formatRupiahServerComp(data.price_range_property)}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Agent;