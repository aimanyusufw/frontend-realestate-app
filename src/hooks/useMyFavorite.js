import { FavoriteContext } from "@/context/FavoriteProvider";
import { useContext } from "react";

export default function useMyFavorites() {
  const { myFavorites, setMyFavorites } = useContext(FavoriteContext);

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
      alert("Sukses menghapus");
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
    alert("Sukses menambahkan");
  };

  return { myFavorites, handleButton, setMyFavorites, isFavorited };
}
