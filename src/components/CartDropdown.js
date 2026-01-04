// src/components/CartDropdown.jsx
import React, { useMemo } from "react";
import { useAtomValue } from "jotai";
import { atomCarts, atomUser } from "../data/atoms";
import { useCartActions } from "../utils/useCartActions";
import "../styles/CartDropdown.css";

export default function CartDropdown({ open }) {
  const user = useAtomValue(atomUser);
  const userId = user?.id;
  const carts = useAtomValue(atomCarts);
  const { removeFromCart, emptyUserCart } = useCartActions();

  const items = useMemo(() => {
    if (!userId) return [];
    return carts?.[userId] ?? [];
  }, [carts, userId]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + Number(item.price || 0), 0);
  }, [items]);

  if (!open) return null;

  const handleCheckout = () => {
    alert("Order Has Been Placed");
    emptyUserCart();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-header">
        <span className="cart-title">Cart</span>
        <span className="cart-count">{items.length} item(s)</span>
      </div>

      {!userId ? (
        <div className="cart-empty">
          Please login or register to use the cart.
        </div>
      ) : items.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item, index) => (
              <div
                key={`${item.id ?? item.name}-${index}`}
                className="cart-row"
              >
                <div className="cart-info">
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-price">
                    ${Number(item.price).toFixed(2)}
                  </div>
                </div>

                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">${total.toFixed(2)}</span>
            </div>
            <button onClick={handleCheckout} className="btn-ghost">
              Check Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
