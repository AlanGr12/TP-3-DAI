import dayjs from 'dayjs'

mostraFechaHora();

function mostraFechaHora(){
   let fecha = dayjs().format('DD/MM/YYYY')
   let hora = dayjs().format('HH:mm')

   console.log(`La fecha actual es ${fecha} y la hora actual es ${hora}`)
   
   fecha = dayjs().format('MMMM D, YYYY')

   console.log(`La fecha actual es ${fecha} y la hora actual es ${hora}`)
}