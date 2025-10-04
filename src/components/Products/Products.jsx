import { useEffect, useReducer, useState } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';
import Modal from '../UI/Modal';
import { initialState, reducerFunction } from './productReducer';
import './Products.css';



function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_PRODUCTS', products: data }))
      .catch((err) => console.log(err))
      .finally(() => dispatch({ type: 'CLOSE_LOADING' }));
  }

  return (
    <div className="products">
      <h2>Add Product Component</h2>
      <AddProductForm
        addNewProduct={(newProduct) =>
          dispatch({ type: 'ADD_NEW_PRODUCT', newProduct })
        }
        setIsShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />

      <button onClick={getProducts}>Ürünleri Getir!</button>

      <h2>Products Component</h2>
      <div className="products-wrapper">
        {state.isLoading && <h2>Loading...</h2>}
        {state.products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              id={product.id}
              onDeleteProduct={(productId) =>
                dispatch({ type: 'DELETE_PRODUCT', productId })
              }
            />
          );
        })}
      </div>

      {state.isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş olamaz!"
          setIsShowModal={() => dispatch({ type: 'CLOSE_MODAL' })}
        />
      )}
    </div>
  );
}

export default Products;
