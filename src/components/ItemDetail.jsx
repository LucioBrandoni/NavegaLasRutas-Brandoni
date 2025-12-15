import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ name, img, category, description, price, stock }) {
  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${name}`);
    // Aquí irá la lógica del carrito en futuras entregas
  };

  return (
    <article className="item-detail">
      <div className="item-detail__image-container">
        <img src={img} alt={name} className="item-detail__image" />
      </div>
      <div className="item-detail__info">
        <div className="item-detail__category">{category}</div>
        <h2 className="item-detail__title">{name}</h2>
        <p className="item-detail__description">{description}</p>
        <div className="item-detail__price">${price.toFixed(2)}</div>
        <div className="item-detail__stock">
          {stock > 0 ? `Stock disponible: ${stock} unidades` : 'Sin stock'}
        </div>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        <Link to="/" className="item-detail__back">
          ← Volver al catálogo
        </Link>
      </div>
    </article>
  );
}

export default ItemDetail;
