import fs from 'fs'
const contenido = fs.readFileSync('./productos.json', 'utf-8')
const productos = JSON.parse(contenido)
for(let i = 0; i < productos.length; i++){
console.log(`El producto es ${productos[i].nombre}, su precio es ${productos[i].precio}`)
}

