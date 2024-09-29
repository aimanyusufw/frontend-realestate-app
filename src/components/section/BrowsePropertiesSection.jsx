"use client";

import { fetchApi } from "@/libs/api-libs";
import React, { useEffect, useState } from "react";
import Property from "../cards/Property";
import { useTranslations } from "next-intl";
import NotFound from "../ui/NotFound";

const BrowsePropertiesSection = () => {
  const t = useTranslations("browsePropertySection");
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetchApi("properties", "limit=9");
      setProperties(response);
      setLoading(false);
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="min-h-screen py-12 md:py-24">
      <div className="container">
        <div className="w-full px-2 mb-10">
          <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-3">
            {t("title")}
          </h1>
          <p className="text-xs md:text-sm max-w-lg text-slate-500">
            {t("description")}
          </p>
        </div>
        {properties?.data.length > 0 ? (
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.data.map((data) => (
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

export default BrowsePropertiesSection;
