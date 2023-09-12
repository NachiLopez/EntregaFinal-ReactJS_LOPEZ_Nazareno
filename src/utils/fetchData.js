const products = [
    { id: 1, name: 'Nike Huarache', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/717274-1200-1200?v=638240096233800000&width=1200&height=1200&aspect=true', stock: 6 },
    { id: 2, name: 'Nike Air Force 1 LV8', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/439665-1200-1200?v=638145706057400000&width=1200&height=1200&aspect=true', stock: 8 },
    { id: 3, name: 'Nike Dunk Low SE', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/532143-1200-1200?v=638161389078630000&width=1200&height=1200&aspect=true', stock: 3 },
    { id: 4, name: 'Nike Huarache', price:75999, desc:'Zapatillas de moda para hombre', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/717274-1200-1200?v=638240096233800000&width=1200&height=1200&aspect=true', stock: 2 },
    { id: 5, name: 'Nike Air Force 1 LV8', price:65999, desc:'Zapatillas de moda para niño', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/439665-1200-1200?v=638145706057400000&width=1200&height=1200&aspect=true', stock: 7 },
    { id: 6, name: 'Nike Dunk Low SE', price:79999, desc:'Zapatillas de moda para mujer', imageUrl:'https://nikearprod.vtexassets.com/arquivos/ids/532143-1200-1200?v=638161389078630000&width=1200&height=1200&aspect=true', stock: 5 },
];
export const fetchData = (pid) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pid ? products.find(product => product.id == pid) : products);
      }, 1500);
    });
};
