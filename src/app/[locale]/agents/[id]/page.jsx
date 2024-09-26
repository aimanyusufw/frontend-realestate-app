import Property from "@/components/cards/Property";
import NotFound from "@/components/ui/NotFound";
import { fetchApi } from "@/libs/api-libs";
import { formatRupiahServerComp } from "@/libs/rupiahFormat";
import parse from "html-react-parser";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const page = async ({ params }) => {
  const t = await getTranslations("agent");
  const agent = await fetchApi(`agents/${params.id}`);
  const properties = await fetchApi(
    `properties`,
    `agent_id=${parseInt(params.id)}`
  );

  return (
    <section className="min-h-screen pt-32 pb-16">
      <div className="container">
        <div className="w-full px-2 flex items-center flex-col md:flex-row">
          <div className="w-full md:w-[80%] mb-10 lg:mb-0">
            <div className="flex flex-col lg:flex-row items-center ">
              <Image
                src={agent.data.profile_picture}
                alt={agent.data.name}
                width={200}
                height={200}
                className="rounded-full lg:rounded-md mb-5 lg:mb-0"
              />
              <div className="w-full ps-8">
                <h1 className="font-medium text-2xl md:text-4xl mb-2 text-center md:text-start">
                  {agent.data.name}
                </h1>
                <p className="font-medium text-xs md:text-sm text-slate-500 text-center md:text-start">
                  {t("memberSince")} {agent.data.joined_date.year}
                </p>
                <div className="flex mt-4">
                  {agent.data.social_media_links.instagram && (
                    <div className="pe-3">
                      <Link href={agent.data.social_media_links.instagram}>
                        <FaInstagram className="w-6 h-6 text-dark-green" />
                      </Link>
                    </div>
                  )}
                  {agent.data.social_media_links.linkedin && (
                    <div className="pe-3">
                      <Link href={agent.data.social_media_links.linkedin}>
                        <FiLinkedin className="w-6 h-6 text-dark-green" />
                      </Link>
                    </div>
                  )}
                  {agent.data.social_media_links.tiktok && (
                    <div className="pe-3">
                      <Link href={agent.data.social_media_links.tiktok}>
                        <FaTiktok className="w-6 h-6 text-dark-green" />
                      </Link>
                    </div>
                  )}
                  {agent.data.social_media_links.twitter && (
                    <div className="pe-3">
                      <Link href={agent.data.social_media_links.twitter}>
                        <FaXTwitter className="w-6 h-6 text-dark-green" />
                      </Link>
                    </div>
                  )}
                  {agent.data.social_media_links.facebook && (
                    <div className="pe-3">
                      <Link href={agent.data.social_media_links.facebook}>
                        <FiFacebook className="w-6 h-6 text-dark-green" />
                      </Link>
                    </div>
                  )}
                </div>
                <div className="max-w-xl grid grid-cols-3 gap-5 mt-5">
                  <div>
                    <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
                      {t("totalProperties")}
                    </h1>
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
                      {agent.data.total_property}
                    </h2>
                  </div>
                  <div>
                    <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
                      {t("totalSold")}
                    </h1>
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
                      {agent.data.total_sold_property}
                    </h2>
                  </div>
                  <div>
                    <h1 className="font-medium text-xs md:text-sm mb-3 text-center">
                      {t("avaragePrice")}
                    </h1>
                    <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
                      {formatRupiahServerComp(agent.data.price_range_property)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <article className="mt-5">
              <h1 className="mb-2 font-medium text-lg">{t("description")}</h1>
              {parse(agent.data.description)}
            </article>
          </div>
          <div className="w-full md:w-[20%]">
            <Link
              href={`tel:${agent.phone}`}
              className="w-full block bg-green-500 text-white rounded-md py-3 font-medium text-center mb-4"
            >
              {t("phone")}
            </Link>
            <Link
              href={`mailto:${agent.email}`}
              className="w-full block border bg-white rounded-md py-3 font-medium text-center"
            >
              {t("email")}
            </Link>
          </div>
        </div>
        <div className="px-2">
          <hr className="my-5" />
        </div>
      </div>
      <div className="container">
        <div className="w-full px-2 mb-5 md:mb-8">
          <h1 className="font-semibold text-3xl md:text-4xl">
            {t("agentProperties")}
          </h1>
        </div>
        {properties ? (
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

export default page;
