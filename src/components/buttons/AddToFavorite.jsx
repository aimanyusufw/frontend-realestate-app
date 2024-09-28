"use client";

import useMyFavorites from "@/hooks/useMyFavorite";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const AddToFavorite = ({ data }) => {
  const { handleButton, isFavorited } = useMyFavorites();

  return (
    <>
      <button
        onClick={() => handleButton(data)}
        className="px-3 py-3 font-medium text-sm rounded-md border flex items-center gap-4"
      >
        {isFavorited(data.slug) ? (
          <>
            <FaHeart className="w-4 h-4 text-dark-green" />
            <span>Remove From Favorites</span>
          </>
        ) : (
          <>
            <FaRegHeart className="w-4 h-4" />
            <span>Add To Favorites</span>
          </>
        )}
      </button>
    </>
  );
};

export default AddToFavorite;
