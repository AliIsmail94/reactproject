import {  useAtomValue, useSetAtom } from "jotai";
import { atomCarts, atomUser } from "../data/atoms";
import api from "../utils/axios";

export function useCartActions() {
  const setCarts = useSetAtom(atomCarts);
  const user = useAtomValue(atomUser);
  const id = user?.id;

  /* =========================
     FETCH CART FROM BACKEND
     ========================= */
  const fetchUserCart = async () => {
    if (!id) return;

    try {
      const res = await api.get(`/carts/user/${id}`);

      setCarts((prev) => ({
        ...prev,
        [id]: res.data, // array of products from DB
      }));
    } catch (err) {
      console.error("Fetch cart failed:", err);
    }
  };

  /* =========================
     ADD TO CART
     ========================= */
  const addToCart = async (product) => {
    if (!id) {
      alert("Please Login or Register first to use the cart");
      return;
    }

    try {
      const res = await api.post("/carts", {
        user_id: id,
        product_id: product.id,
      });

      const cartItem = {
        cart_id: res.data.id,     // <-- from backend
        product_id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      };

      setCarts((prev) => {
        const userCart = prev[id] ?? [];
        return {
          ...prev,
          [id]: [...userCart, cartItem],
        };
      });
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("Could not add item to cart");
    }
  };


  /* =========================
     REMOVE FROM CART (by cart_id)
     ========================= */
  const removeFromCart = async (cartId, indexToRemove) => {
    if (!id) return;

    try {
      await api.delete(`/carts/${cartId}`);

      fetchUserCart();
    } catch (err) {
      console.error("Remove from cart failed:", err);
      alert("Could not remove item");
    }
  };

  /* =========================
     EMPTY USER CART
     ========================= */
  const emptyUserCart = async () => {
    if (!id) return;

    try {
      await api.delete(`/carts/user/${id}`);

      setCarts((prev) => ({
        ...prev,
        [id]: [],
      }));
    } catch (err) {
      console.error("Clear cart failed:", err);
      alert("Could not clear cart");
    }
  };

  return {
    fetchUserCart,
    addToCart,
    removeFromCart,
    emptyUserCart,
  };
}
