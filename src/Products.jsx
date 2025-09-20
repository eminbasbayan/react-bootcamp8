import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
