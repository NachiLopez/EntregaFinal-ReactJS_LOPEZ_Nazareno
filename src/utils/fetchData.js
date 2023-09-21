const products = [
    { id: 1, name: 'Nike Huarache', category:'zapatillas', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'../../public/NikeAirHuarache.webp', stock: 6 },
    { id: 2, name: 'Nike Air Force 1 LV8', category:'zapatillas', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'../../public/NikeAirForce1LV8.webp', stock: 8 },
    { id: 3, name: 'Nike Dunk Low SE', category:'zapatillas', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'../../public/NikeDunkLowSE.webp', stock: 3 },
    { id: 4, name: 'BKRM Hoddie White', category:'hoddies', price:31900, desc:'Hoddie blanco oversize de la marca BKRM', imageUrl:'../../public/bkrm-hoddie-white-men.jpeg', stock: 2 },
    { id: 5, name: 'BKRM Remera Black Woman', category:'remeras', price:11990, desc:'Remera negra para mujeres de la marca BKRM', imageUrl:'../../public/bkrm-shirt-black-woman.jpeg', stock: 7 },
    { id: 6, name: 'BKRM Remera Blanca Woman', category:'remeras', price:11990, desc:'Remera blanca para mujeres de la marca BKRM', imageUrl:'../../public/bkrm-shirt-white-woman.jpeg', stock: 5 },
    { id: 7, name: 'Hoddie gris Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie gris oversize de Maria Jesus', imageUrl:'../../public/mariajesus-gris-hoddie-men.jpeg', stock: 14 },
    { id: 8, name: 'Hoddie negro Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie negro oversize de Maria Jesus', imageUrl:'../../public/mariajesus-hoddie-black-men.jpeg', stock: 28 },
    { id: 9, name: 'Hoddie blanco Maria Jesus', category:'hoddies', price:29900, desc:'Hoddie blanco oversize de Maria Jesus', imageUrl:'../../public/mariajesus-hoddie-white-men.jpeg', stock: 16 }
];

export const fetchData = (pid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pid ? products.find(product => product.id == pid) : products);
      }, 1000);
    });
};
