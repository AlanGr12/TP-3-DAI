import fs from 'fs'

const contenido = fs.readFileSync('./productos.json', 'utf-8')

const productoss = JSON.parse(contenido)

let varProductos = 'nombre,precio'

let listProductos = productoss.map(productos => `${productos.nombre},${productos.precio}`).join('\n')

let csvEscribir = varProductos + '\n'+ listProductos

fs.writeFileSync('productos.csv', csvEscribir, 'utf-8')
