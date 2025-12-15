import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../data/products';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProductById(itemId);
        setProduct(response);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="loading">Cargando producto...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container">
        <div className="error">Producto no encontrado</div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
