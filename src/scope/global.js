var a; // declaracion 
var b = 'b' // declaramos / asignamos 
b = 'bb' //reasignacion
var a = 'aa' // redeclaracion 

// Global Scope
var fruit = 'Apple'; // global

function bestFruit(){
    console.log(fruit)
}

bestFruit()

function contries(){
    country = 'Colombia' // Global
    console.log(country)
}

countries()
console.log(country)