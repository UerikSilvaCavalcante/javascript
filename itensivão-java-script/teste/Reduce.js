const vendas = [650,550,1020,1060,200,150,495,875]

// Maior venda
// Menor venda 
// Média de vendas 
// Faturamento diario

// informações unicas 
// dois paramentros, 1 uma função, 2 valor inicial

const MaiorVenda = vendas.reduce((maiorValor, elemAtual)=> {
    return maiorValor > elemAtual ? maiorValor : elemAtual;
}, 0)

const faturamentoDiario = vendas.reduce((total, elementoAtual) => {
    return total + elementoAtual;
}, 0)

const MenorVenda = vendas.reduce((menorValor, elemAtual)=> {
    return menorValor < elemAtual ? menorValor : elemAtual;
})

const Media = vendas.reduce((total, elementoAtual) => {
    return total + elementoAtual;
}, 0) / vendas.length

console.log(faturamentoDiario)
console.log(MenorVenda)
console.log(Media)

// console.log(MaiorVenda)
// maiorValor = 650
