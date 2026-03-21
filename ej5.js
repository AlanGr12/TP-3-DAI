import fs from 'fs'


buscarProducto("Mouse")

function buscarProducto(nombre)
{
    const contenido = fs.readFileSync('./productos.json', 'utf-8')
    const productos = JSON.parse(contenido)

    const buscarP = productos.find(producto => producto.nombre === nombre)

    if (buscarP === undefined){
        console.log(`El producto no se ha encontrado`)
    }
    else{
        console.log(`El producto se ha encontrado, el nombre del producto es ${buscarP.nombre}, su precio es ${buscarP.precio} `)
    }

}
