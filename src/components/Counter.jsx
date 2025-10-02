import { useEffect, useState } from 'react';

function Counter() {
  const [state, setState] = useState(0);
  const [fullName, setFullName] = useState('Boş');

  console.log('render oldu!');

  function arttir() {
    setState(state + 1);
  }

  function azalt() {
    setState(state - 1);
  }

  useEffect(() => {
    console.log('component sadece ilk yüklendiği çalışır!');
  }, []);

  useEffect(() => {
    console.log(
      "component ilk yüklendiğinde ve depen. arr'e yazılan değerlere göre çalışır!"
    );
  }, [fullName, state]);

  return (
    <div className="counter">
      <button onClick={arttir}>+</button>
      <span>{state}</span>
      <button onClick={azalt}>-</button>

      <p>{fullName}</p>
      <button onClick={() => setFullName('Emin Başbayan')}>
        İsmi Değiştir
      </button>
    </div>
  );
}

export default Counter;
