import Button from '../UI/Button';
import './ProductCard.css';

function ProductCard(props) {
  const { id, image, title, price, category, description, onDeleteProduct } =
    props;
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="Çanta Görseli" />

      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <span className="product-category">{category}</span>
        <p className="product-description">{description}</p>

        <Button type="success" onClick={() => {}} addClass="mb-2">
          Sepete Ekle
        </Button>
        <Button type="danger" onClick={() => onDeleteProduct(id)}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
