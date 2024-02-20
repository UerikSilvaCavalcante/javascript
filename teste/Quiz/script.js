let question = document.getElementById("pergunta");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
let btn_3 = document.getElementById("btn_3");
let btn_4 = document.getElementById("btn_4");



const perguntas = [
    {pergunta :"Qual é o maior planeta do sistema solar?" , 
    opcoes :["A) Terra", 'B) Júpiter', 'C) Saturno', 'D) Marte'], 
    correta :'B) Júpiter'},

    {pergunta :'Quem escreveu a obra "Dom Quixote"?', 
    opcoes :["A) William Shakespeare", 'B) Miguel de Cervantes', 'C) Dante Alighieri', 'D) Voltaire'], 
    correta :'B) Miguel de Cervantes'},

    {pergunta :"Qual é o símbolo químico do ouro?" , 
    opcoes :["A) Ag", 'B) Au', 'C) Fe', 'D) Pb'], 
    correta :'B) Au'}, 

    {pergunta :'Quem pintou a obra "Mona Lisa"?' , 
    opcoes :["A) Pablo Picasso", 'B) Leonardo da Vinci', 'C) Michelangelo', 'D) Vincent van Gogh'], 
    correta :'B) Leonardo da Vinci'},

    {pergunta :"Qual é a capital do Canadá?" , 
    opcoes :["A) Vancouver", 'B) Toronto', 'C) Montreal', 'D) Ottawa'], 
    correta :'D) Ottawa'},   
]


var num = 0;
let correta = "";

let correct = perguntas[0].correta
btn_1.innerText = perguntas[0].opcoes[0]
btn_2.innerText = perguntas[0].opcoes[1]
btn_3.innerText = perguntas[0].opcoes[2]
btn_4.innerText = perguntas[0].opcoes[3]

question.innerHTML = perguntas[0].pergunta

function gera_pergunta(num){
    question.innerHTML = perguntas[num].pergunta
}

function botoes(num){
    btn_1.innerText = perguntas[num].opcoes[0]
    btn_2.innerText = perguntas[num].opcoes[1]
    btn_3.innerText = perguntas[num].opcoes[2]
    btn_4.innerText = perguntas[num].opcoes[3]

}

function confere_resp(resposta){
    correct = perguntas[num].correta
    console.log(correct)
    if (resposta == correct){
        if (num >= 4){
            num = 0
        } else {
            num ++
        }
        console.log(num)
        gera_pergunta(num)
        botoes(num)
        
        console.log("certa")
    } else {
        console.log("Errada")
        alert("Resposta Errada")
    }
}



console.log(btn_1.textContent)
btn_1.addEventListener("click", function() {
    confere_resp(btn_1.textContent)
});
btn_2.addEventListener('click', function (){
    confere_resp(btn_2.textContent)
});
btn_3.addEventListener('click', function() {
    confere_resp(btn_3.textContent)
});
btn_4.addEventListener('click', function() {
    confere_resp(btn_4.textContent)
});


