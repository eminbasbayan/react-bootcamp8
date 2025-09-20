// React projelerinde ekranda değişiklik görmek istiyorsak ekrandaki değer bir STATE'e bağlı olması gerekiyor!!!

import { useState } from 'react';

function Counter() {
  const [state, setState] = useState(0);
  // let count = 0;

  function arttir() {
    // count = count + 1;
    setState(state + 1);
  }

  function azalt() {
    // count = count + 1;
    setState(state - 1);
  }

  console.log('component render edildi!');

  return (
    <div className="counter">
      <button onClick={arttir}>+</button>
      <span>{state}</span>
      <button onClick={azalt}>-</button>
    </div>
  );
}

export default Counter;
