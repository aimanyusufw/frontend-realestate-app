import React from "react";
import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AgentSmall = ({ agent }) => {
  const t = useTranslations("agent");

  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center mb-5">
        <LocaleLink href={`/agents/${agent.id}`}>
          <Image
            src={agent.profile_picture}
            alt={agent.name}
            width={60}
            height={60}
            className="rounded-full"
          />
        </LocaleLink>
        <div className="ps-4">
          <LocaleLink href={`/agents/${agent.id}`}>
            <h1 className="text-xl md:text-2xl mb-1 font-medium">
              {agent.name}
            </h1>
          </LocaleLink>
          <p className="text-xs md:text-sm text-slate-500">
            {t("memberSince")} {agent.joined_date.year}
          </p>
        </div>
      </div>
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
  );
};

export default AgentSmall;
