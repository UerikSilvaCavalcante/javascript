async function getCEP(cep){
    const reponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return reponse.json()
}

let cep = document.getElementById("num_Cep")
let btn = document.getElementById("btn_buscar")


function colocaINFO(info, id) {
    let inp = document.getElementById(id)
    inp.textContent = info
}

btn.addEventListener("click", ()=> {
    getCEP(cep.value).then(data => {
        console.table(data)
        colocaINFO(data.bairro, "bairro")
        colocaINFO(`${data.logradouro} ${data.complemento}`, "complemento")
        colocaINFO(data.localidade, "cidade")
        colocaINFO(data.uf, "estado")

    })
})

