import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import "../styles/ProductsPage.css";
import { useAtom, useAtomValue } from "jotai";
import { atomProducts, atomSearch } from "../data/atoms";
import api from "../utils/axios";

function ProductsPage() {
  const search = useAtomValue(atomSearch);
  
  const [products, setProducts] = useAtom(atomProducts);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  const [loadingProducts, setLoadingProducts] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoadingProducts(true);
      const result = await api.get("/products");
      setProducts(result.data);
      setLoadingProducts(false);
    };
    if(products.length === 0) getProducts();
  }, [setProducts, products.length]);
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <h2>Products</h2>
          <p className="section-subtitle">
            Hand-picked components for serious gamers and creators.
          </p>
        </div>
        {loadingProducts? <>LOADING...</>:<ProductGrid items={filteredProducts} /> }
        
      </section>
    </main>
  );
}

export default ProductsPage;
