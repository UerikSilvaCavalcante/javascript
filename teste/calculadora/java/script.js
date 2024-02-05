const barra = document.getElementById('icalc');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n0 = document.getElementById('n0');
const npt = document.getElementById('pt');

n1.addEventListener("click", () => {
    barra.value += 1;
});
n2.addEventListener("click",() => {
    barra.value += 2;
});

n3.addEventListener("click",() => {
    barra.value += 3;
});

n4.addEventListener("click",() => {
    barra.value += 4;
});

n5.addEventListener("click",() => {
    barra.value += 5;
});

n6.addEventListener("click",() => {
    barra.value += 6;
});

n7.addEventListener("click",() => {
    barra.value += 7;
});

n8.addEventListener("click",() => {
    barra.value += 8;
});

n9.addEventListener("click",() => {
    barra.value += 9;
});

n0.addEventListener("click",() => {
    barra.value += 0;
});

npt.addEventListener("click",() => {
    barra.value += '.';
});

function Limpa_valor(){
    barra.value = ''
}

const limpa = document.getElementById('limp');
limpa.addEventListener("click", Limpa_valor);

const adic = document.getElementById('mais');
adic.addEventListener("click", () => {
    barra.value += ' + '
})

const sub = document.getElementById("sub");
sub.addEventListener("click", () => {
    barra.value += ' - '
})

const multi = document.getElementById('vezes');
multi.addEventListener("click", ()=> {
    barra.value += ' * '
})

const div = document.getElementById('div');
div.addEventListener("click", () => {
    barra.value += ' / '
})

const porcentagem = document.getElementById('porcent');
porcentagem.addEventListener("click", ()=> {
    barra.value += ' % '
})

const igual = document.getElementById("igual");

function calcular(){
    num = barra.value;
    barra.value = eval(num);
}

igual.addEventListener("click", calcular);

function apagar() {
    num = barra.value;
    barra.value = num.substring(0, num.length -1);
}

const apag = document.getElementById('apaga');

apag.addEventListener("click", apagar);