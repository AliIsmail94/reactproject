import { atomWithStorage } from "jotai/utils";

export const atomUser = atomWithStorage("user", {});
export const atomCarts = atomWithStorage("carts", {});
export const atomProducts = atomWithStorage("products", []);
export const atomSearch = atomWithStorage("search", "");
