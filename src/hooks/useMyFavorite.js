import { FavoriteContext } from "@/context/FavoriteProvider";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function useMyFavorites() {
  const { myFavorites, setMyFavorites } = useContext(FavoriteContext);
  const t = useTranslations("favoritesToast");

  const isFavorited = (slug) => {
    const isFavorited = myFavorites.find((item) => item.slug === slug);
    return isFavorited ? true : false;
  };

  const handleButton = (property) => {
    if (isFavorited(property.slug)) {
      const filteredFavorites = myFavorites.filter(
        (item) => item.slug !== property.slug
      );
      setMyFavorites(filteredFavorites);
      window.localStorage.setItem(
        "my_favorites_properties",
        JSON.stringify(filteredFavorites)
      );
      toast.success(t("remove"), { duration: 5000 });
      return;
    }
    setMyFavorites((prev) => {
      const newFavaorites = [...prev, property];
      window.localStorage.setItem(
        "my_favorites_properties",
        JSON.stringify(newFavaorites)
      );
      return newFavaorites;
    });
    toast.success(t("add"), { duration: 5000 });
  };

  return { myFavorites, handleButton, setMyFavorites, isFavorited };
}
