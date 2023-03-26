import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
  const {name, price, id} = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  }
  const removeFromCart = (id) => {
    removeFromDb(id);
  }
  return (
    <div className='product'>
      <h2>Buy this: {name}</h2>
      <h4>Price: {price}</h4>
      <p>id: {id}</p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
      <button onClick={() => removeFromCart(id)}>Remove from cart</button>
    </div>
  );
};

export default Cosmetic;