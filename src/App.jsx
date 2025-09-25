import Products from './components/Products/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <div className="container">
      <Button type="primary" size="sm" title="Sepete Ekle" />
      <Button type="danger" title="Ürünü Sil" />
      <Button type="secondary" size="lg" title="Veriyi Getir!" />

      <Button type="primary" size="sm" title="Formu Gönder" />
      {/* <Products /> */}
    </div>
  );
}

export default App;
