import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard fullName="Emin Başbayan" courseName="React"  />
      </div>
    </div>
  );
}

export default Products;
