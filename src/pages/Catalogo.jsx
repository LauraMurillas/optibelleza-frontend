
import { useEffect, useState } from 'react';
export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('/api/productos').then(res => res.json()).then(setProductos);
  }, []);
  return (

    <div className="grid">
        <h1>Catálogo de Productos
        <Link to="/admin">Muy pronto</Link>
    </h1>
      {productos.map(p => (
        <div key={p.id}>
          <img src={p.imagen} alt={p.nombre} />
          <h3>{p.nombre}</h3>
          <p>${p.precio}</p>
        </div>
      ))}
    </div>
  );
}