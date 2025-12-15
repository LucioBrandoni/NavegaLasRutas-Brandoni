import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ id, name, img, price, stock }) {
  return (
    <article className="item">
      <img src={img} alt={name} className="item__image" />
      <div className="item__content">
        <h3 className="item__title">{name}</h3>
        <p className="item__price">${price.toFixed(2)}</p>
        <p className="item__stock">Stock: {stock} unidades</p>
        <Link to={`/item/${id}`} className="item__link">
          Ver detalles
        </Link>
      </div>
    </article>
  );
}

export default Item;
