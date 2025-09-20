import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
