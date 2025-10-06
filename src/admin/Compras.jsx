export default function Compras() {
  const [compras, setCompras] = useState([]);
  useEffect(() => {
    fetch('/api/compras').then(res => res.json()).then(setCompras);
  }, []);
  return (
    <ul>
      {compras.map(c => (
        <li key={c.id}>{c.usuario} compró {c.total} COP</li>
      ))}
    </ul>
  );
}