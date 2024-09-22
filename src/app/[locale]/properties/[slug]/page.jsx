import { fetchApi } from "@/libs/api-libs";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import AgentSmall from "@/components/cards/AgentSmall";
import Specification from "@/components/ui/Specification";
import parse from "html-react-parser";
import ContactUsSection from "@/components/section/ContactUsSection";
import Property from "@/components/cards/Property";
import NotFound from "@/components/ui/NotFound";

const page = async ({ params: { slug } }) => {
  const t = await getTranslations();

  const property = await fetchApi(`properties/${slug}`);
  if (property === undefined) notFound();

  return (
    <>
      <section className="min-h-screen pt-24">
        <div className="container">
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full md:w-[80%] px-2 mb-5 md:mb-0">
              <Image
                src={property.data.thumbnail}
                alt={slug}
                width={1600}
                height={900}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="w-full md:w-[20%] px-2 overflow-auto flex md:flex-col flex-row gap-4">
              {property.data.galleries.map((data, index) => (
                <Image
                  key={index}
                  src={data.image}
                  alt={`${slug} ${index}`}
                  width={160}
                  height={90}
                  className="rounded-md w-full md:w-auto max-w-[160px] md:max-w-none object-cover"
                />
              ))}
            </div>
          </div>
          <div className="px-2">
            <hr className="my-5" />
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-[70%] px-2 mb-5">
              <h1 className="font-semibold text-3xl md:text-4xl text-blue-500 mb-4">
                {property.data.price.string}
              </h1>
              <h1 className="font-semibold text-4xl md:text-5xl mb-3">
                {property.data.title}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mb-3 ">
                {property.data.description_title}
              </p>
              <div className="flex items-center text-blue-500">
                <FaMapMarkedAlt />
                <span className="ms-2">
                  {property.data.location.name}, Indonesia
                </span>
              </div>
              <div className="flex flex-col md:flex-row mt-10">
                <div className="w-full mb-8 md:mb-0 pe-0 md:pe-4">
                  <h1 className="text-2xl md:text-3xl font-semibold mb-5">
                    {property.data.short_description}
                  </h1>
                  <article className="prose porse-sm lg:prose-base">
                    {parse(property.data.description)}
                  </article>
                </div>
                <Specification specification={property.data.specification} />
              </div>
            </div>
            <div className="w-full md:w-[30%] px-2">
              <AgentSmall agent={property.data.agent} />
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="w-full px-2 mb-5 md:mb-8">
            <h1 className="font-semibold text-3xl md:text-4xl">
              {t("property.relatedProperties")}
            </h1>
          </div>
          {property.data.related_properties.length > 0 ? (
            <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.data.related_properties.map((data) => (
                <Property data={data} key={data.slug} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <ContactUsSection />
    </>
  );
};

export default page;
