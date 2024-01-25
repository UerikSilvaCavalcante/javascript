var agora = new Date
var dia_da_semana = agora.getDay()

// 0 = Domingo
// 1 = Segunda 
// 2 = Terça 
// 3 = Quarta 
// 4 = Quinta 
// S = exta 
// 6 = Sábado

console.log(dia_da_semana)

switch(dia_da_semana) {
    case 0:
        console.log('DOMINGO')
        break
    case 1:
        console.log('SEGUNDA')
        break
    case 2:
        console.log('TERÇA')
        break
    case 3:
        console.log('QUARTA')
        break
    case 4:
        console.log('QUINTA')
        break
    case 5:
        console.log('SEXTA')
        break    
    case 6:
        console.log('SABADO')
        break
    default : 
        console.log('[ERRO] Dia inválido')     
}   