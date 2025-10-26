import { useEffect, useReducer, useMemo } from 'react';

import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';
import Modal from '../UI/Modal';
import { initialState, reducerFunction } from './productReducer';
import './Products.css';



function Products({ searchTerm = '', selectedCategory = 'all' }) {
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

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return state.products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [state.products, searchTerm, selectedCategory]);

  return (
    <div className="products">
      {/* Add Product Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Yeni Ürün Ekle</h2>
        <AddProductForm
          addNewProduct={(newProduct) =>
            dispatch({ type: 'ADD_NEW_PRODUCT', newProduct })
          }
          setIsShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
        />
      </div>

      {/* Refresh Button */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          Ürünler
          {filteredProducts.length > 0 && (
            <span className="ml-3 text-lg font-normal text-gray-600">
              ({filteredProducts.length} ürün)
            </span>
          )}
        </h2>
        <button
          onClick={getProducts}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Ürünleri Yenile
        </button>
      </div>

      {/* Products Grid */}
      <div className="products-wrapper">
        {state.isLoading && (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">Ürünler yükleniyor...</h2>
          </div>
        )}

        {!state.isLoading && filteredProducts.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <svg
              className="w-24 h-24 text-gray-300 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Ürün Bulunamadı
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              {searchTerm || selectedCategory !== 'all'
                ? 'Arama kriterlerinize uygun ürün bulunamadı. Filtreleri değiştirmeyi deneyin.'
                : 'Henüz ürün bulunmuyor.'}
            </p>
          </div>
        )}

        {!state.isLoading &&
          filteredProducts.map((product) => {
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
