let question = document.getElementById("pergunta");
let btn_1 = document.getElementById("btn_1");
let btn_2 = document.getElementById("btn_2");
let btn_3 = document.getElementById("btn_3");
let btn_4 = document.getElementById("btn_4");
let barra = document.getElementById("barra");
const conteiner = document.querySelector(".conteiner");
let popup = document.querySelector(".popupload")
let cont = document.getElementById("cont")
let num_quest = document.getElementById("number_question")

let btn_iniciar = document.getElementById("yes")

let content = document.getElementById("icontent");
let title = document.getElementById("ititle");
let iniciar = document.getElementById("init")

let intervalo;
let contador = 30
let isTime = false

let acertos = 0

const act = document.getElementById("act")
let num_act = document.getElementById("iacertos")

let btn_recomeça = document.getElementById("recomeçar")

const perguntas = [
    {
        "pergunta": "Qual é o maior planeta do sistema solar?",
        "opcoes": ["A) Terra", "B) Júpiter", "C) Saturno", "D) Marte"],
        "correta": "B) Júpiter"
    },
    {
        "pergunta": "Quem escreveu a obra 'Dom Quixote'?",
        "opcoes": ["A) William Shakespeare", "B) Miguel de Cervantes", "C) Dante Alighieri", "D) Voltaire"],
        "correta": "B) Miguel de Cervantes"
    },
    {
        "pergunta": "Qual é o símbolo químico do ouro?",
        "opcoes": ["A) Ag", "B) Au", "C) Fe", "D) Pb"],
        "correta": "B) Au"
    },
    {
        "pergunta": "Qual é o maior oceano do mundo em extensão?",
        "opcoes": ["A) Oceano Índico", "B) Oceano Pacífico", "C) Oceano Atlântico", "D) Oceano Ártico"],
        "correta": "B) Oceano Pacífico"
    },
    {
        "pergunta": "Quem pintou a obra 'Mona Lisa'?",
        "opcoes": ["A) Pablo Picasso", "B) Leonardo da Vinci", "C) Michelangelo", "D) Vincent van Gogh"],
        "correta": "B) Leonardo da Vinci"
    },
    {
        "pergunta": "Qual é a capital do Canadá?",
        "opcoes": ["A) Vancouver", "B) Toronto", "C) Montreal", "D) Ottawa"],
        "correta": "D) Ottawa"
    },
    {
        "pergunta": "Qual é a montanha mais alta do mundo?",
        "opcoes": ["A) Everest", "B) K2", "C) Kilimanjaro", "D) Mont Blanc"],
        "correta": "A) Everest"
    },
    {
        "pergunta": "Quem foi o primeiro presidente do Brasil?",
        "opcoes": ["A) Getúlio Vargas", "B) Juscelino Kubitschek", "C) Marechal Deodoro da Fonseca", "D) Tancredo Neves"],
        "correta": "C) Marechal Deodoro da Fonseca"
    },
    {
        "pergunta": "Qual é o metal líquido à temperatura ambiente?",
        "opcoes": ["A) Ferro", "B) Ouro", "C) Mercúrio", "D) Alumínio"],
        "correta": "C) Mercúrio"
    },
    {
        "pergunta": "Qual é a capital da Argentina?",
        "opcoes": ["A) Santiago", "B) Buenos Aires", "C) Rio de Janeiro", "D) Lima"],
        "correta": "B) Buenos Aires"
    }
]



var num = 0;
let correta = "";

let correct = perguntas[0].correta
btn_1.innerText = perguntas[0].opcoes[0]
btn_2.innerText = perguntas[0].opcoes[1]
btn_3.innerText = perguntas[0].opcoes[2]
btn_4.innerText = perguntas[0].opcoes[3]

question.innerHTML = perguntas[0].pergunta

function gera_pergunta(){
    num_quest.textContent = num + 1
    question.innerHTML = perguntas[num].pergunta
}

function botoes(){
    btn_1.innerText = perguntas[num].opcoes[0]
    btn_2.innerText = perguntas[num].opcoes[1]
    btn_3.innerText = perguntas[num].opcoes[2]
    btn_4.innerText = perguntas[num].opcoes[3]

}

function showPopupError(){
    conteiner.classList.add("errado")
    setTimeout(()=> {
        conteiner.classList.remove("errado")
        if (num >= 10){
            iniciar.style.display = 'none'
            content.style.display = 'none'
            title.style.display = 'none'
            act.style.display = 'flex'
            cont.style.display = 'none'
            num_act.textContent = `${acertos + 1}/10`
        } else {
        gera_pergunta()
        botoes()
        tempo_resp()
        }
    }, 2000)
  
}

function showPopupAcerto(){
    conteiner.classList.add("right")
    setTimeout(()=> {
        conteiner.classList.remove("right")
        if (num >= 10){
            iniciar.style.display = 'none'
            content.style.display = 'none'
            title.style.display = 'none'
            act.style.display = 'flex'
            cont.style.display = 'none'
            num_act.textContent = `${acertos}/10`
        } else {
        gera_pergunta()
        botoes()
        tempo_resp()
        }
    }, 2000)
   
}



function tempo_resp(){
    intervalo = setInterval(()=>{
        cont.innerText = formatTime(contador)
        contador --
        if(contador <= 0){
            clearInterval(intervalo)
            console.log(contador)
            confer_inativo()
        }
    }, 1000)  
}



function formatTime(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}



function confer_inativo(){
    console.log(contador)
    if (contador <= 0){
        if (num >= 10){
            num = 0
            showPopupError()
        } else {
            num ++
        }
        showPopupError()
        contador = 30
    } 
}

function confere_resp(resposta){
    correct = perguntas[num].correta;
    console.log(correct);
    isClose = true;
    clearInterval(intervalo)
    contador = 30
    if (num >= 10){   
        if (resposta == correct){
           showPopupAcerto() 
        } else {
            showPopupError()
        }

        num = 0
    } else {
        num ++
        if (resposta == correct){
            acertos ++
            console.log("acertos " + acertos)
            console.log(num)
            console.log("certa")
            showPopupAcerto()
        } else {
            showPopupError()
            console.log(num)
        }
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

btn_iniciar.addEventListener("click", ()=>{
    iniciar.style.display = 'none'
    content.style.display = 'flex'
    title.style.display = 'block'
    cont.style.display = 'flex'
    isTime = true
    tempo_resp()
})

btn_recomeça.addEventListener("click", () => {
    iniciar.style.display = 'flex'
    act.style.display = "none"
})

