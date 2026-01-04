import ProductCard from "./ProductCard";

function ProductGrid({ items }) {
  return (
    <div className="item-grid">
      {items.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
}

export default ProductGrid;
