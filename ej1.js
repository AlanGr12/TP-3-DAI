import fs from 'fs'
const contenido = fs.readFileSync('./productos.json', 'utf-8')
const productos = JSON.parse(contenido)
for(let i = 0; i < 5; i++){
console.log(`El producto es ${productos[i]}`)
}