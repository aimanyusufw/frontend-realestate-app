import Agent from "@/components/cards/Agent";
import ContactUsSection from "@/components/section/ContactUsSection";
import NotFound from "@/components/ui/NotFound";
import { fetchApi } from "@/libs/api-libs";
import { getTranslations } from "next-intl/server";
import React from "react";

const page = async () => {
  const t = await getTranslations("agentsPage");
  const agents = await fetchApi("agents");

  return (
    <>
      <section className="min-h-screen pt-24 md:pt-32 pb-16">
        <div className="container">
          <div className="w-full px-2">
            <h1 className="font-semibold text-3xl md:text-4xl mb-4">
              {t("title")}
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-md">
              {t("description")}
            </p>
          </div>
          {agents.data.length > 1 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 px-2 gap-5 mt-8">
              {agents.data.map((data) => (
                <Agent data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </section>
      <ContactUsSection />
    </>
  );
};

export default page;
