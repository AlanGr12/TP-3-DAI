
function validarPassword(password){

    let tieneNum = false
    let tieneMayus = false

    if(password.length < 8){
        return console.log("Password invalida")
    }

    for(let i = 0 ; i < password.length ; i++){
        let letra = password[i]
        if(!isNaN(letra)){
            tieneNum = true
        }
        else if(letra.toUpperCase() === password[i]){
            tieneMayus = true
        }

    
    }
    
    

    if(tieneNum == true && tieneMayus == true ){
        return console.log("Password valida")
    }
    else
        return console.log("La password no contiene una mayuscula o un numero")
    

}
