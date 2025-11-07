//fichero de productos para la tienda

const PRODUCTS = [
  {
    id: "p001",                 // id único
    name: "Crema Hidratante",   // nombre mostrado
    slug: "crema-hidratante",   // slug/URL opcional
    price: 24900,               // precio en centavos o unidades
    currency: "COP",
    description: "Hidratación profunda para todo tipo de piel.",
    images: ["/products/crema1.jpg", "/products/crema2.jpg"], // rutas (public/ o import)
    category: "Cuidado Facial",
    stock: 12,
    featured: false
  },

  // ...otros productos...
];

export default PRODUCTS;