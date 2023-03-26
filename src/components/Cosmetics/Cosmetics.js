import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  const total = getTotal(cosmetics);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCosmetics(data))
  }, [])
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Total price: {total}</p>
      {
        cosmetics.map(cosmetic => <Cosmetic
          cosmetic={cosmetic}
          key={cosmetic.id}></Cosmetic>)
      }
    </div>
  );
};

export default Cosmetics;