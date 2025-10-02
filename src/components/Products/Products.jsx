import ProductCard from './ProductCard';
import productsData from '../../data/productsData';
import './Products.css';
import { useState } from 'react';
import AddProductForm from './AddProductForm';
import Modal from '../UI/Modal';

function Products() {
  const [titleState, setTitleState] = useState('Title');
  const [products, setProducts] = useState(productsData);
  const [isShowModal, setIsShowModal] = useState(false);

  function addNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  function handleDeleteProduct(productId) {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    console.log('products: ', products);
    console.log('filteredProducts: ', filteredProducts);
    setProducts(filteredProducts);
  }

  return (
    <div className="products">
      <h2>Add Product Component</h2>
      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />

      <h2>Products Component</h2>
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              id={product.id}
              titleState={titleState}
              setTitleState={setTitleState}
              onDeleteProduct={handleDeleteProduct}
            />
          );
        })}
      </div>

      {isShowModal && (
        <Modal title="Form Hatası" description="Inputlar boş olamaz!" setIsShowModal={setIsShowModal} />
      )}
    </div>
  );
}

export default Products;
