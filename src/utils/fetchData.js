import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";

const products = [
    { name: 'Nike Huarache', category:'zapatillas', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'https://i.ibb.co/F0wDGtn/Nike-Air-Huarache.webp', stock: 100 },
    { name: 'Nike Air Force 1 LV8', category:'zapatillas', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'https://i.ibb.co/pJ3d1MN/Nike-Air-Force1-LV8.webp', stock: 100 },
    { name: 'Nike Dunk Low SE', category:'zapatillas', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'https://i.ibb.co/0qjXkd5/Nike-Dunk-Low-SE.webp', stock: 100 },
    { name: 'BKRM Hoddie White', category:'hoddies', price:31900, desc:'Hoddie blanco oversize de la marca BKRM', imageUrl:'https://i.ibb.co/mRrHfXQ/bkrm-hoddie-white-men.jpg', stock: 100 },
    { name: 'BKRM Remera Black Woman', category:'remeras', price:11990, desc:'Remera negra para mujeres de la marca BKRM', imageUrl:'/https://i.ibb.co/4J0H38t/bkrm-shirt-black-woman.jpg', stock: 100 },
    { name: 'BKRM Remera Blanca Woman', category:'remeras', price:11990, desc:'Remera blanca para mujeres de la marca BKRM', imageUrl:'https://i.ibb.co/hdjPg4T/bkrm-shirt-white-woman.jpg', stock: 100 },
    { name: 'Hoddie gris Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie gris oversize de Maria Jesus', imageUrl:'https://i.ibb.co/rMm5t4n/mariajesus-gris-hoddie-men.jpg', stock: 100 },
    { name: 'Hoddie negro Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie negro oversize de Maria Jesus', imageUrl:'https://i.ibb.co/KXWsr7T/mariajesus-hoddie-black-men.jpg', stock: 100 },
    { name: 'Hoddie blanco Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie blanco oversize de Maria Jesus', imageUrl:'https://i.ibb.co/G0YQZG8/mariajesus-hoddie-white-men.jpg', stock: 100 }
];

export const fetchData = (pid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pid ? products.find(product => product.id == pid) : products);
      }, 1000);
    });
};

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
