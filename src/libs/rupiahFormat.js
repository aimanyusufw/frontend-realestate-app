import { useTranslations } from "next-intl";

export const FormatRupiahClientComp = (amount) => {
  const t = useTranslations("currency");

  const units = [
    { unit: t("billion"), divisor: 1_000_000_000, decimals: 2 },
    { unit: t("million"), divisor: 1_000_000, decimals: 0 },
    { unit: t("thousand"), divisor: 1_000, decimals: 2 },
    { unit: "", divisor: 1, decimals: 2 },
  ];

  for (const { unit, divisor, decimals } of units) {
    if (amount >= divisor) {
      return "IDR " + (amount / divisor).toFixed(decimals) + " " + unit;
    }
  }
};

export const FormatRupiahServerComp = (amount) => {
  const units = [
    { unit: "M", divisor: 1_000_000_000, decimals: 2 },
    { unit: "JT", divisor: 1_000_000, decimals: 0 },
    { unit: "K", divisor: 1_000, decimals: 2 },
    { unit: "", divisor: 1, decimals: 2 },
  ];

  for (const { unit, divisor, decimals } of units) {
    if (amount >= divisor) {
      return [(amount / divisor).toFixed(decimals), unit];
    }
  }
};
