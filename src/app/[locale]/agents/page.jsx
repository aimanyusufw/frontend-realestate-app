import Agent from "@/components/cards/Agent";
import ContactUsSection from "@/components/section/ContactUsSection";
import NotFound from "@/components/ui/NotFound";
import { fetchApi } from "@/libs/api-libs";
import React from "react";

const page = async () => {
  const agents = await fetchApi("agents");

  return (
    <>
      <section className="min-h-screen pt-24 md:pt-32 pb-16">
        <div className="container">
          <div className="w-full px-2">
            <h1 className="font-semibold text-3xl md:text-4xl mb-4">
              Our Agents
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              quasi ex sint rem earum animi consequuntur doloribus, autem
              deserunt minus.
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
