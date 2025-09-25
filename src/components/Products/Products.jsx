import ProductCard from './ProductCard';
import productsData from '../../data/productsData';
import './Products.css';
import { useState } from 'react';
import AddProductForm from './AddProductForm';

function Products() {
  const [titleState, setTitleState] = useState('Title');

  return (
    <div className="products">
      <h2>Add Product Component</h2>
      <AddProductForm />

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
              titleState={titleState}
              setTitleState={setTitleState}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
