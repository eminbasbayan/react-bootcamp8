import Button from '../UI/Button';
import './AddProductForm.css';

function AddProductForm() {
  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" placeholder="Bir ürün ismi giriniz!" />
      </label>
      <label>
        Price:
        <input type="number" placeholder="Bir ürün fiyatı giriniz!" />
      </label>
      <label>
        Image URL:
        <input type="text" placeholder="Bir ürün görseli giriniz!" />
      </label>
      <label>
        Description:
        <input type="text" placeholder="Bir ürün açıklaması giriniz!" />
      </label>

      <Button type="primary">Ürünü Ekle</Button>
    </form>
  );
}

export default AddProductForm;
