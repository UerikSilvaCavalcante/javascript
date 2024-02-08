const btn = document.querySelector('.generate');
const senha = document.getElementById('senha');
const caracteres = "abcdefjhijklmnopqrstuwyzABCDEFGHIJKLMNOPQRSTUVWYZ1234567890!#%"
let tamanho = 12;
let palavra = "";


function GeraSenha(){
    for (let c = 0; c < tamanho; c++){
        const caracter = Math.floor(Math.random() * caracteres.length)
        palavra += caracteres[caracter]
    }
    senha.textContent = palavra;
    senha.style.color = "black"
    palavra = "";
}

function Limpa(){
    senha.textContent = "";
    GeraSenha()
}

btn.addEventListener("click", Limpa)

