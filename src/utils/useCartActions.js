// src/utils/useCartActions.js
import { useAtom, useAtomValue } from "jotai";
import { atomCarts, atomUser } from "../data/atoms";

export function useCartActions() {
  const [carts, setCarts] = useAtom(atomCarts);
  const user = useAtomValue(atomUser);
  const id = user?.id;

  const addToCart = (product) => {
    console.log("id", id);
    if (!id) {
      alert("Please Login or Register first to use the cart");
      return;
    }

    setCarts(() => {
      const userCart = carts[id] ?? [];
      return {
        ...carts,
        [id]: [...userCart, product],
      };
    });
  };

  const removeFromCart = (indexToRemove) => {
    if (!id) return;

    setCarts((prev) => {
      const userCart = prev?.[id] ?? [];
      const nextCart = userCart.filter((_, i) => i !== indexToRemove);

      return {
        ...prev,
        [id]: nextCart,
      };
    });
  };

  const emptyUserCart = () => {
    if (!id) return;

    setCarts((prev) => {
      // Option A: keep user key but empty cart
      return {
        ...prev,
        [id]: [],
      };
    });
  };

  return { addToCart, removeFromCart, emptyUserCart };
}
