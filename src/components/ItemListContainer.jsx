
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../data/products";
import "./ItemListContainer.css";

function ItemListContainer({ mensaje }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const asyncFunc = categoryId ? getProductsByCategory(categoryId) : getProducts();
    
    asyncFunc
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <section className="item-list-container">
        <div className="loading">Cargando productos...</div>
      </section>
    );
  }

  const categoryNames = {
    laptops: 'Laptops',
    perifericos: 'Periféricos',
    monitores: 'Monitores',
    componentes: 'Componentes'
  };

  const title = categoryId 
    ? `${categoryNames[categoryId] || categoryId}`
    : 'Todos los productos';

  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">{title}</h2>
      {products.length === 0 ? (
        <div className="no-products">No hay productos disponibles en esta categoría</div>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;
