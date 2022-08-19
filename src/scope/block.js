function fruits() { // alcance de bloque, las variables definidas solo pueden ser usadas dentro de este bloque
    if (true) {
        var fruit1 = 'Apple' //function scope
        let fruit2 = 'kiwi' //block scope
        const fruit3 = 'banana' // block scope
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
    
}

fruits()