function analizarTexto(texto){
    let caracteres = texto.length
    let palabras = texto.split(" ").length
    let caracteresVocales = 0;
    let cartacteresConsonantes = 0;

    for(let i = 0; i < texto.length; i++){
        if('a' === texto[i] || 'e' === texto[i] || 'i' === texto[i] || 'o' === texto[i] || 'u' === texto[i]){
            caracteresVocales++;
        }
        else if('b' === texto[i] || 'c' === texto[i] || 'd' === texto[i] || 'f'=== texto[i] || 'g'=== texto[i] || 'h'=== texto[i] || 'j' === texto[i] || 'k' === texto[i] || 'l' === texto[i] || 'm' === texto[i] || 'p' === texto[i] || 'q' === texto[i] || 'r' === texto[i] || 's' === texto[i] || 't' === texto[i] || 'w' === texto[i] || 'x' === texto[i] || 'y' === texto[i] || 'z' === texto[i] )
        cartacteresConsonantes++
    }

    let cantTexto = {caracteres,palabras,caracteresVocales,cartacteresConsonantes}

    return cantTexto
}
