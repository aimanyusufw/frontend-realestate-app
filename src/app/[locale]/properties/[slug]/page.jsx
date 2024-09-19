import { fetchApi } from "@/libs/api-libs";
import React from "react";

const page = async ({ params: { slug } }) => {
  const data = await fetchApi(`properties/${slug}`);

  return (
    <section className="min-h-screen">
      <div className="container">
        <div className="w-full px-2">
          <h1>{slug}</h1>
        </div>
      </div>
    </section>
  );
};

export default page;
