import fs from 'fs'
agregarProducto("Monitor",120000);

function agregarProducto(nombre, precio){

const contenido = fs.readFileSync('./productos.json', 'utf-8')
const productos = JSON.parse(contenido)

productos.push({nombre, precio})
fs.writeFileSync('./productos.json', JSON.stringify(productos))
console.log(`El nuevo producto es ${productos[2].nombre} y su precio es ${productos[2].precio}`)
}



