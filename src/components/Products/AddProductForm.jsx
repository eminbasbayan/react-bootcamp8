import { useState } from 'react';
import Button from '../UI/Button';
import './AddProductForm.css';

function AddProductForm({ addNewProduct }) {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  function handleChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    addNewProduct(newProduct);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title: {product.title}
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Bir ürün ismi giriniz!"
        />
      </label>
      <label>
        Price: {product.price}
        <input
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Bir ürün fiyatı giriniz!"
        />
      </label>
      <label>
        Image URL: {product.image}
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Bir ürün görseli giriniz!"
        />
      </label>
      <label>
        Description: {product.description}
        <input
          type="text"
          onChange={handleChange}
          name="description"
          placeholder="Bir ürün açıklaması giriniz!"
        />
      </label>

      <Button type="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
