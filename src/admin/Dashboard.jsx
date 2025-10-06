export default function Dashboard() {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <nav>
        <Link to="/admin/inventario">Inventario</Link>
        <Link to="/admin/compras">Compras</Link>
      </nav>
    </div>
  );
}