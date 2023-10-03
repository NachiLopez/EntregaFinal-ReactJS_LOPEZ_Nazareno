import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";

const products = [
    { name: 'Nike Huarache', category:'zapatillas', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'/public/NikeAirHuarache.webp', stock: 100 },
    { name: 'Nike Air Force 1 LV8', category:'zapatillas', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'/public/NikeAirForce1LV8.webp', stock: 100 },
    { name: 'Nike Dunk Low SE', category:'zapatillas', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'/public/NikeDunkLowSE.webp', stock: 100 },
    { name: 'BKRM Hoddie White', category:'hoddies', price:31900, desc:'Hoddie blanco oversize de la marca BKRM', imageUrl:'/public/bkrm-hoddie-white-men.jpeg', stock: 100 },
    { name: 'BKRM Remera Black Woman', category:'remeras', price:11990, desc:'Remera negra para mujeres de la marca BKRM', imageUrl:'/public/bkrm-shirt-black-woman.jpeg', stock: 100 },
    { name: 'BKRM Remera Blanca Woman', category:'remeras', price:11990, desc:'Remera blanca para mujeres de la marca BKRM', imageUrl:'/public/bkrm-shirt-white-woman.jpeg', stock: 100 },
    { name: 'Hoddie gris Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie gris oversize de Maria Jesus', imageUrl:'/public/mariajesus-gris-hoddie-men.jpeg', stock: 100 },
    { name: 'Hoddie negro Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie negro oversize de Maria Jesus', imageUrl:'/public/mariajesus-hoddie-black-men.jpeg', stock: 100 },
    { name: 'Hoddie blanco Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie blanco oversize de Maria Jesus', imageUrl:'/public/mariajesus-hoddie-white-men.jpeg', stock: 100 }
];

/* Lo dejo para poder llamar a los productos si se termina la cuota de FireBase, el problema es que no
se pueden ver los detalles del producto porque no tiene ID (lo borro para que el ID lo genere automaticamente
el firebase al agregar el producto) */
export const fetchData = (pid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pid ? products.find(product => product.id == pid) : products);
      }, 1000);
    });
};

// Este es el metodo que se usa
export const addProductsFireBase = async () => {
  const productosPasados = await fetchData()
  const db = getFirestore();
  const productsCollection = collection(db, 'products');

  try {
      for (const producto of productosPasados) {
          await addDoc(productsCollection, producto);
      }
  } catch (error) {
      console.error('Error al agregar producto: ', error);
  }
}
