import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Counter from './components/Counter';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="container mx-auto">
      <Login />
      <Register />
      {/* <Products />  */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
