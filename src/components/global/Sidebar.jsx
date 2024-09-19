import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import LocaleSwithcer from "../Locale/LocaleSwithcer";

const Sidebar = ({ isOpen, handleMenu }) => {
  const t = useTranslations("menu");

  return (
    <>
      <aside
        id="sidebar-responsive"
        className={`fixed top-0 right-0 z-50 w-64 h-screen transition-transform sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <div className="flex items-center p-2 my-5 justify-between">
            <Link
              onClick={handleMenu}
              href="/"
              className="self-center text-2xl font-playFair font-bold font-inria-serif whitespace-nowrap"
            >
              Horizon Homes
            </Link>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                onClick={handleMenu}
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <span className="font-medium text-sm">{t("home")}</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleMenu}
                href="/properties"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <span className="font-medium text-sm">{t("properties")}</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleMenu}
                href="/agents"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <span className="font-medium text-sm">{t("agents")}</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={handleMenu}
                href="/favorites"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
              >
                <span className="font-medium text-sm">{t("favorite")}</span>
              </Link>
            </li>
            <li>
              <LocaleSwithcer />
            </li>
          </ul>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[45]"
          aria-hidden="true"
          onClick={handleMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
