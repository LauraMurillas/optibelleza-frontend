
import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section>
      <h1>Bienvenidos a OptiBelleza</h1>
      <p>Tu visión, nuestra pasión. Encuentra el marco perfecto para ti.</p>
      <Link to="/catalogo">Ver Catálogo</Link>
    </section>
  );
}