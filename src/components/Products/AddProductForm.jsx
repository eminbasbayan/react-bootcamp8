import { useState } from 'react';
import Button from '../UI/Button';
import './AddProductForm.css';

function AddProductForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');


  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  return (
    <form className="add-product-form">
      {title}
      <label>
        Title: {title}
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Bir ürün ismi giriniz!"
        />
      </label>
      <label>
        Price: {price}
        <input
          type="number"
          onChange={handlePriceChange}
          placeholder="Bir ürün fiyatı giriniz!"
        />
      </label>
      <label>
        Image URL: {image}
        <input
          type="text"
          onChange={handleImageChange}
          placeholder="Bir ürün görseli giriniz!"
        />
      </label>
      <label>
        Description: {description}
        <input
          type="text"
          onChange={handleDescriptionChange}
          placeholder="Bir ürün açıklaması giriniz!"
        />
      </label>

      <Button type="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
