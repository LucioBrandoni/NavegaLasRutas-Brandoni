import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <HashRouter>
      <h1 style={{
        textAlign: 'center',
        marginTop: '4rem',
        marginBottom: '5rem',
        fontSize: '2.5rem',
        color: '#3193bb',
        fontWeight: '700',
        letterSpacing: '2px',
        textShadow: '0 4px 16px rgba(48,232,191,0.35)'
      }}>¡Bienvenido a Master Bytes!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
