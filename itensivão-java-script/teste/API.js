async function getProd() {
    const response = await fetch('https://64390baa-1ae0-4cf4-ad49-c797de87894e-00-174moqp93z3mq.janeway.replit.dev/pegarprodutos')

    return response.json()
}

getProd().then(data => console.table(data))

getProd().then(data => {
    let petisqueira = data.filter(elem => elem.tipo == 'Petisqueira')
    console.log("Tabela de petisqueiras")
    console.table(petisqueira)
    let soma = 0
    for (let c = 0; c < petisqueira.length; c ++){
        soma += Number(petisqueira[c].quantidade)
    }
    console.log(`Soma da quantidade de Petisqueiras ${soma}`)
})


// getProd().then(data => {
//     const result = data.results
//     const peoples = []

//     for (let p of result){
//         peoples.push({
//             "Nome": `${p.name.first} ${p.name.last}`,
//             "Sexo": p.gender,
//             "Idade": p.dob.age
//         })
//     }
   // console.table(peoples)
// })