"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Not found</h1>
    </>
  );
}
