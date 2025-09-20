import ProductCard from './ProductCard';
import productsData, { products, customers } from './data/productsData';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard
          image={productsData[0].image}
          title={productsData[0].title}
          price={productsData[0].price}
          description={productsData[0].description}
        />
        <ProductCard
          image={productsData[1].image}
          title={productsData[1].title}
          price={productsData[1].price}
          description={productsData[1].description}
        />
      </div>
    </div>
  );
}

export default Products;
