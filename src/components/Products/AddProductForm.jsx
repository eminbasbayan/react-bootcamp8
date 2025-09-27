import { useState } from 'react';
import Button from '../UI/Button';
import ProductInput from './ProductInput';

import productInputs from '../../data/productInputs';
import './AddProductForm.css';

function AddProductForm({ addNewProduct }) {
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

    console.log(Object.keys(product));
    console.log(Object.values(product));
    console.log(Object.entries(product));

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      alert('Inputlar boş bırakılamaz!');
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input) => (
        <ProductInput key={input.name} handleChange={handleChange} {...input} />
      ))}

      <Button type="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
