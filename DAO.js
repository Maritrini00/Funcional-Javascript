let fs = require('fs');
class DAO{
    constructor(fileName){
        this.fileName =fileName;
        let contents =fs.readFileSync(fileName,'utf8');
        this.productData = JSON.parse(contents);
    }

    ExistentesMayor(existe){
        return this.productData.filter(producto =>producto.existencia >existe);
    }

    ExistentesMayor(existe){
        return this.productData.filter(producto => producto.existencia <existe);
    }

    mismaClasificacionMayorPrecio(precio1,clas){
        return this.productData.filter(producto => producto.clasificacion ===clas && producto.precio >precio1);
    }

    precioEntre(precio1,precio2){
        return this.productData.filter(producto =>producto.precio > precio1 && producto.precio < precio2);
    }

    mismaClasificación(clas){
        return this.productData.filter(producto => producto.clas === clasificacion);
    }
}

module.exports = DAO;