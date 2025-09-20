import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="product-card">
      <img className="product-image" src={props.image} alt="Çanta Görseli" />

      <div className="product-info">
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.price}₺</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
