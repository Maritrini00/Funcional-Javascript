const DAO = require('./DAO');

let dao = new DAO('productos.json');

console.log('Número de productos con existencia mayor a 20: ');
console.log(dao.existentesMayor(20));
console.log('Número de productos con existencia menos a 15: ');
console.log(dao.existentesMenor(15));
console.log('productos con la misma clasificación y precio mayor 15.50: ');
console.log(dao.mismaClasificacionMayorPrecio(15.5,'alimentos perecederos'));
console.log('Lista de productos con precio mayor a 20.30 y menor a 45.00:');
console.log(dao.precioEntre(20.3,45));
console.log ('Número de productos agrupados por su clasificación: ');
console.log(dao.mismaClasificacion('limpieza'));