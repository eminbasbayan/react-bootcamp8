import { useContext } from 'react';
import Button from '../UI/Button';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';

function ProductCard(props) {
  const { id, image, title, price, category, description } = props;
  const { onDeleteProduct, cart, onRemoveFromCart, ...product } = props;
  const { addToCart } = useContext(CartContext);

  function removeElement(elementId) {
    if (cart) {
      onRemoveFromCart(elementId);
    } else {
      onDeleteProduct(elementId);
    }
  }

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />

      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <span className="product-category">{category}</span>
        <p className="product-description">{description}</p>
        {!cart && (
          <Button
            type="success"
            onClick={() => addToCart(product)}
            addClass="mb-2"
          >
            Sepete Ekle
          </Button>
        )}

        <Button type="danger" onClick={() => removeElement(id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
