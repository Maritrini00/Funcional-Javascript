let fs = require('fs');
class DAO{
    constructor(fileName){
        this.fileName =fileName;
        let contents =fs.readFileSync(fileName,'utf8');
        this.productData = JSON.parse(contents);
    }

    existentesMayor(existe){
        return this.productData.filter(producto =>producto.existencia >existe);
    }

    existentesMenor(existe){
        return this.productData.filter(producto => producto.existencia <existe);
    }

    mismaClasificacionMayorPrecio(precio1,clas){
        return this.productData.filter(producto => producto.clasificacion ===clas && producto.precio >precio1);
    }

    precioEntre(precio1,precio2){
        return this.productData.filter(producto =>producto.precio > precio1 && producto.precio < precio2);
    }

    mismaClasificacion(clas){
        return this.productData.filter(producto => producto.clasificacion === clas);
    }
}

module.exports = DAO;