const products = [
    { id: 1, name: 'Nike Huarache', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'../../../public/NikeAirHuarache.webp' },
    { id: 2, name: 'Nike Air Force 1 LV8', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'../../../public/NikeAirForce1LV8.webp' },
    { id: 3, name: 'Nike Dunk Low SE', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'../../../public/NikeDunkLowSE.webp' },
    { id: 4, name: 'Nike Huarache', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'../../../public/NikeAirHuarache.webp' },
    { id: 5, name: 'Nike Air Force 1 LV8', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'../../../public/NikeAirForce1LV8.webp' },
    { id: 6, name: 'Nike Dunk Low SE', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'../../../public/NikeDunkLowSE.webp' }
];
export const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
};
