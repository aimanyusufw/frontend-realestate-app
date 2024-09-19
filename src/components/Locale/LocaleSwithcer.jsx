import { useLocale, useTranslations } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { routing } from "@/i18n/routing";

const LocaleSwithcer = () => {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwithcer;
