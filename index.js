
// Para la declaración de variables se debe utilizar const
const products = [
    { nombre: "manzana", precio: 600, stock: 15 },
    { nombre: "pera", precio: 1200, stock: 0 },
    { nombre: "lechuga", precio: 500, stock: 20 },
    { nombre: "palta", precio: 3000, stock: 1 },
    { nombre: "platano", precio: 800, stock: 0 },
    { nombre: "limon", precio: 1000, stock: 3 },
    { nombre: "acelga", precio: 500, stock: 12 },
    { nombre: "cilantro", precio: 900, stock: 0 },
    { nombre: "platano", precio: 800, stock: 10 }
];

//mostrar en consola cuántos productos quedan en stock.
//Simular al menos una vez un código asíncrono con Async/Await.
const productStock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.stock > 0));
        }, 2000);
    });
};
async function showProducts() {
    const datosAwait = await productStock();
    console.log(datosAwait);
}
showProducts();


//subir el precio de los productos cuando quede poca existencia.
const upPriceUnitProduct = products.map((product) => {
    if (product.stock === 1) {
        return {
            ...product,
            precio: product.precio * 2,
        };
    }
    return product;
});
console.log(upPriceUnitProduct);


//saber si pueden vender un producto (si hay suficiente en stock).
// manejar errores con throw y Error.
const purchase = {
    nombre: "manzana",
    cantidad: 5,
};
const existProduct = (arr, val) => {
    return arr.some(arrVal => val === arrVal.nombre);
}
const canSell = ((nombre, stock) => {
    try {
        if (existProduct(products, nombre)) {
            let index = products.findIndex(elem => elem.nombre === nombre);
            //   console.log(index)
            if (products[index].stock >= stock) {
                return (console.log("puede vender"))
            }
            throw new Error("no hay suficiente stock");
        }
        throw new Error("El producto no existe");
    } catch (e) {
        console.log(e)
    }
});
canSell(purchase.nombre, purchase.cantidad);


//saber cuánto es el valor total de los productos.
const totalValueProducts = () => {
    const array = [];
    let totalValue = 0;
    products.forEach((product) => {
        array.push(product.precio * product.stock);
    });
    array.reduce((acum, num) => {
        return (totalValue = acum + num);
    }, 0);
    return totalValue;
};
console.log(totalValueProducts())
