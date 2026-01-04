import React from "react";
import { useCartActions } from "../utils/useCartActions";

function ProductCard({ product }) {
  const { addToCart } = useCartActions();
  return (
    <article className="item-box">
      <div className="item-info">
        <div style={{ display: "flex", marginBottom: "10px", gap: "10px" }}>
          <div className="item-img-box">
            <img
              src={`https://reactprojectbackend-production-dbb1.up.railway.app/uploads/${product.image}`}
              alt={product.name}
              className="item-img"
            />
          </div>
          <div>
            <h3 className="item-name">{product.name}</h3>
            <p className="item-price">${product.price}</p>
          </div>
        </div>
        <button className="btn-primary">View Details</button>
        <button onClick={() => addToCart(product)} className="btn-ghost">
          Add To Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
