import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Çanta Görseli"
      />

      <div className="product-info">
        <strong className="product-title">Çanta</strong>
        <span className="product-price">1000₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
