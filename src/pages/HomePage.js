import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import "../styles/HomePage.css";

import pc1 from "../assets/pc4.webp";
import pc2 from "../assets/pc2.jpg";
import pc3 from "../assets/pc3.jpg";
import ProductGrid from "../components/ProductGrid";
import { useAtom } from "jotai";
import { atomProducts } from "../data/atoms";
import api from "../utils/axios";

function HomePage() {
  const [products, setProducts] = useAtom(atomProducts);
  const [loadingProducts, setLoadingProducts] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoadingProducts(true);
      const result = await api.get("/products");
      setProducts(result.data);
      setLoadingProducts(false);
    };
    if(products.length === 0) getProducts();
  }, [setProducts]);

  const [category, setCategory] = useState("");

  const filteredItems = products.filter((item) => item.category === category);

  return (
    <main className="page">
      <Hero />
      {loadingProducts ? (
        <>LOADING...</>
      ) : (
        <div>
          <CategoryStrip changeCategory={setCategory} />
          <ProductGrid items={filteredItems} />
        </div>
      )}
      <section className="section">
        <div className="section-header">
          <h2>Featured Builds & Parts</h2>
        </div>

        <div className="pc-grid">
          <div className="pc-box">
            <img src={pc1} alt="PC Build 1" />
            <h3>Extreme Cooling Gaming PC</h3>
          </div>

          <div className="pc-box">
            <img src={pc2} alt="PC Build 2" />
            <h3> Pro Gaming Workstation</h3>
          </div>

          <div className="pc-box">
            <img src={pc3} alt="PC Build 3" />
            <h3>Alien Build</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
