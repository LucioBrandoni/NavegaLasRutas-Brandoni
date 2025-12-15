import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map(prod => (
        <Item 
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.img}
          price={prod.price}
          stock={prod.stock}
        />
      ))}
    </div>
  );
}

export default ItemList;
