import React from "react";
import ProductGrid from "../components/ProductGrid";
import "../styles/ProductsPage.css";
import { useAtomValue } from "jotai";
import { atomProducts, atomSearch } from "../data/atoms";

function ProductsPage() {
  const products = useAtomValue(atomProducts);
  const search = useAtomValue(atomSearch);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <h2>Products</h2>
          <p className="section-subtitle">
            Hand-picked components for serious gamers and creators.
          </p>
        </div>
        <ProductGrid items={filteredProducts} />
      </section>
    </main>
  );
}

export default ProductsPage;
