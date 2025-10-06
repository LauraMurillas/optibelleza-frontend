
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing.jsx';
import Catalogo from '../pages/Catalogo.jsx';
import Dashboard from '../admin/Dashboard';
import Inventario from '../admin/Inventario';
import Compras from '../admin/Compras';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/inventario" element={<Inventario />} />
        <Route path="/admin/compras" element={<Compras />} />
      </Routes>
    </BrowserRouter>
  );
}