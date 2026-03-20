import axios from 'axios'

async function obtenerPais(nombrePais){
    const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)
    const pais = respuesta.data[0]
}   