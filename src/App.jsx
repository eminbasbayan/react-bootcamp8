import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('Emin Başbayan');

  function changeName() {
    setFullName('Ahmet Demir');
  }

  return (
    <div className="container">
      <h1>{fullName}</h1>
      <button id="myBtn" onClick={changeName}>
        İsmi Değiştir
      </button>
    </div>
  );
}

export default App;
