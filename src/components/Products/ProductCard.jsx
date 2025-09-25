import './ProductCard.css';

function ProductCard(props) {

  function handleTitleChange(){
    props.setTitleState("Title Değişti!")
  }

  return (
    <div className="product-card">
      <img className="product-image" src={props.image} alt="Çanta Görseli" />

      <div className="product-info">
        <strong className="product-title">{props.titleState}</strong>
        <span className="product-price">{props.price}₺</span>
        <p className='product-description'>{props.description}</p>

        <button onClick={handleTitleChange}>Title'ı Değiştir!</button>
      </div>

      
    </div>
  );
}

export default ProductCard;
