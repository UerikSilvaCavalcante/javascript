// map()
console.log("map()")
const number = [1,54,5,2,3,5,8];

const DorbraVal = number.map( function(elem) {
    return elem * 2
})

console.log(DorbraVal);

const str = ["a", "bo", "er"]

const aumenta = str.map(str => str.toUpperCase())
const confere = str.map( function(elem) {
    if (elem == "bo"){
        return elem.replace("b", "C")
    }
    else {
        return elem
    }
})
console.log(aumenta)
console.log(confere)

// 
console.log(" ")
// filter()
console.log("filter()")


const Array = [2,4,3,3,4,5,7,8,8,7];

const Arrayfileter = Array.filter((elem, index, arr) => arr.indexOf(elem) == index)
console.log(Arrayfileter)

// 
console.log(" ")
// reduce()
console.log("reduce()")
const foguetes = [
    {pais: "Russia", lançamentos: 12},
    {pais: "USA", lançamentos: 30},
    {pais: "Japão", lançamentos: 20},
    {pais: "Brasil", lançamentos: 0}
]


const total_de_lançamentos = foguetes.reduce((preVal, elem) => preVal + elem.lançamentos, 0)
console.log(total_de_lançamentos)

// 
console.log(" ")
// every()
// console.log("every()"); //retuorna True ou False
const valores = [12,3,5,6,7,8,44];
const result = valores.every(elem => elem >= 10)
// console.log(result)
 
const pessoas = [
    {id:12, nome:"Paulo", idade:10},
    {id:14, nome:"Maria", idade:23},
    {id:2, nome:"Marcos", idade:15},
    {id:6, nome:"Luiza", idade:35}
]

const resutado = pessoas.every(p => p.idade >= 18)
if (resutado == false){
    let result = pessoas.filter(p => p.idade < 18)
    let menores = []
    for (let p of result){
        menores.push({
            "Nome": p.nome,
            "Idade": p.idade
        })
    }
    console.table(menores)
} else {
    console.log(true)
}
// 
console.log(" ")
// some()

function Primo(value){
    for (let c = 2; c < value; c++) {
        if (value % c == 0){
            return false
        }
    }

    return value > 1
}

const Val = [6,7,3,2,12,9]
// console.log(Val.some(Primo))
// 
console.log(" ")
// 

// API

async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=10')

    return response.json()
}

// getPeople().then(data => console.log(data))

getPeople().then(data => {
    const pessoas = data.results
    // console.log(pessoas.filter(p => p.gender == "female"))
})

getPeople().then(data => {
    const result = data.results
    const peoples = []

    for (let p of result){
        peoples.push({
            "Nome": `${p.name.first} ${p.name.last}`,
            "Sexo": p.gender,
            "Idade": p.dob.age
        })
    }
    console.table(peoples)
})