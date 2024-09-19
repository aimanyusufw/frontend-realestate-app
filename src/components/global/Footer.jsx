import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import React from "react";

const Footer = async () => {
  const t = await getTranslations();

  return (
    <footer className="border-t py-10">
      <div className="container">
        <div className="w-full flex flex-wrap justify-between px-2">
          <h1 className="font-bold font-sans text-2xl md:text-3xl w-full md:w-1/2 mb-10 md:mb-0">
            Horizon Homes
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
            <div>
              <h1 className="font-semibold text-sm md:text-base mb-3 md:mb-5">
                Menu
              </h1>
              <div className="flex flex-col gap-4">
                <Link
                  href={"/"}
                  className="text-sm md:text-base hover:underline"
                >
                  {t("menu.home")}
                </Link>
                <Link
                  href={"/properties"}
                  className="text-sm md:text-base hover:underline"
                >
                  {t("menu.properties")}
                </Link>
                <Link
                  href={"/agents"}
                  className="text-sm md:text-base hover:underline"
                >
                  {t("menu.agents")}
                </Link>
                <Link
                  href={"/favorites"}
                  className="text-sm md:text-base hover:underline"
                >
                  {t("menu.favorite")}
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-sm md:text-base mb-3 md:mb-5">
                Social Media
              </h1>
              <div className="flex flex-col gap-4">
                <Link
                  href={"/"}
                  className="text-sm md:text-base hover:underline"
                >
                  Instagram
                </Link>
                <Link
                  href={"/properties"}
                  className="text-sm md:text-base hover:underline"
                >
                  Facebook
                </Link>
                <Link
                  href={"/agents"}
                  className="text-sm md:text-base hover:underline"
                >
                  Linkedin
                </Link>
                <Link
                  href={"/favorites"}
                  className="text-sm md:text-base hover:underline"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <span className="text-center text-xs md:text-sm">
          © 2023 <Link href={"/"}>Horizon Homes</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
