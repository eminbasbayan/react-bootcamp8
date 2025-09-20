import ProductCard from './ProductCard';
import productsData from '../../data/productsData';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
