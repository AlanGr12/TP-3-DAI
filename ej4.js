import axios from 'axios'

obtenerPais('Argentina')


async function obtenerPais(nombrePais){
    const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)
    const pais = respuesta.data[0]

    console.log(`El nombre del pais es ${pais.name.common}, su capital es ${pais.capital[0]}, su region es ${pais.region}, la cantidad de poblacion es ${pais.population}`)
}   
