"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import LocaleSwithcer from "../Locale/LocaleSwithcer";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const t = useTranslations("menu");
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`py-5 fixed top-0 left-0 right-0 z-20 ${
          navBg ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="w-full flex justify-between items-center px-2">
            <Link href={"/"}>
              <h1 className="font-bold text-3xl font-playFair">
                Horizon Homes
              </h1>
            </Link>
            <div className=" md:hidden">
              <HiOutlineMenu className="w-7 h-7" onClick={handleMenu} />
            </div>
            <div className="hidden md:flex items-center gap-5">
              <Link className="text-sm font-medium" href={"/"}>
                {t("home")}
              </Link>
              <Link className="text-sm font-medium" href={"/properties"}>
                {t("properties")}
              </Link>
              <Link className="text-sm font-medium" href={"/agents"}>
                {t("agents")}
              </Link>
              <Link className="text-sm font-medium" href={"/favorites"}>
                {t("favorite")}
              </Link>
              <LocaleSwithcer />
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
    </>
  );
};

export default Navigation;
