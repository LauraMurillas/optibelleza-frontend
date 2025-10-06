export default function Inventario() {
  const [form, setForm] = useState({ nombre: '', precio: '', imagen: '' });
  const handleSubmit = async () => {
    await fetch('/api/productos', { method: 'POST', body: JSON.stringify(form) });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" onChange={e => setForm({ ...form, nombre: e.target.value })} />
      <input placeholder="Precio" onChange={e => setForm({ ...form, precio: e.target.value })} />
      <input placeholder="URL Imagen" onChange={e => setForm({ ...form, imagen: e.target.value })} />
      <button type="submit">Agregar</button>
    </form>
  );
}