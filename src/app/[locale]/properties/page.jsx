"use client";

import Property from "@/components/cards/Property";
import ContactUsSection from "@/components/section/ContactUsSection";
import FiltersType from "@/components/ui/FiltersType";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import NotFound from "@/components/ui/NotFound";
import Pagination from "@/components/ui/Pagination";
import SearchBar from "@/components/ui/SearchBar";
import { fetchApi } from "@/libs/api-libs";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    properties: undefined,
    typeProperties: undefined,
  });
  const [filters, setFilters] = useState({
    type: params.get("type") || "",
    query: params.get("query") || "",
  });
  const [loadings, setLoadings] = useState({
    properties: true,
    typeProperties: true,
  });

  const fetchTypeProperties = async () => {
    try {
      const response = await fetchApi("types");
      setLoadings((prev) => ({ ...prev, typeProperties: false }));
      setData((prev) => ({ ...prev, typeProperties: response }));
    } catch (error) {
      setData((prev) => ({ ...prev, typeProperties: null }));
    }
  };
  const fetchProperties = async () => {
    try {
      const response = await fetchApi(
        "properties",
        `type=${filters.type ? filters.type : ""}&limit=12&page=${page}&query=${
          filters.query
        }`
      );
      setLoadings((prev) => ({ ...prev, properties: false }));
      setData((prev) => ({ ...prev, properties: response }));
    } catch (error) {
      setData((prev) => ({ ...prev, properties: null }));
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchTypeProperties();
  }, [filters.type, page, filters.query]);

  useEffect(() => {
    const type = params.get("type") || "";
    const query = params.get("query") || "";
    setFilters({ type, query });
  }, [params]);

  return (
    <>
      <section className="min-h-screen py-32 md:py-24">
        <div className="container">
          <div className="w-full flex flex-wrap-reverse items-end justify-between px-2">
            <FiltersType
              filters={filters}
              typeProperties={data.typeProperties}
              loadings={loadings.typeProperties}
            />
            <div className="mb-8 md:mb-0 w-full md:w-auto flex justify-end">
              <SearchBar filters={filters} setFilters={setFilters} />
            </div>
          </div>
          <div className="px-2">
            <hr className="my-5" />
          </div>
          {data.properties.data.length > 0 || data.properties.data === null ? (
            <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.properties.data.map((data) => (
                <Property data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          lastPage={data.properties?.meta?.last_page}
        />
      </section>
      <ContactUsSection />
    </>
  );
};

export default page;
