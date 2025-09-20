import ProductCard from './ProductCard';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="products-wrapper">
        <ProductCard
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          title="Çanta"
          price={1000}
          description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket"
        />
        <ProductCard
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
          title="Kazak"
          price="5000"
          description={"Slim-fitting style, contrast raglan long sleeve, three-button henley placket"}
        />
      </div>
    </div>
  );
}

export default Products;
