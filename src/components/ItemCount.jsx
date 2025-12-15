import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button 
          className="item-count__button" 
          onClick={handleDecrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="item-count__number">{count}</span>
        <button 
          className="item-count__button" 
          onClick={handleIncrement}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="item-count__add-button" 
        onClick={handleAdd}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
}

export default ItemCount;
