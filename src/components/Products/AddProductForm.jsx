import { useState } from 'react';
import Button from '../UI/Button';
import ProductInput from './ProductInput';

import productInputs from '../../data/productInputs';
import './AddProductForm.css';

function AddProductForm({ addNewProduct, setIsShowModal }) {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
    category: '',
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);

    setProduct({
      title: '',
      price: '',
      image: '',
      description: '',
      category: '',
    });
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput
          key={input.name}
          handleChange={handleChange}
          value={product[input.name]}
          {...input}
        />
      ))}

      <Button type="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
