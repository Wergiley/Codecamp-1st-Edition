//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha

let lista1 = gets().split(", ");
let lista2 = gets().split(", ");
let lista3 = gets().split(", ");

let tipoDoFiltro = "Filtro Simples"

let listaGeral = lista1.concat(lista2).concat(lista3)

const moleculasProibidas = "NO2, SO2, CO, FHO".split(", ")

const moleculaFiltrada = moleculasProibidas.find(molecula => listaGeral.includes(molecula))

if(moleculaFiltrada != undefined) {
 tipoDoFiltro = `Filtro Específico para a Molécula ${moleculaFiltrada}`
}

print(tipoDoFiltro);

/*
 Sobre o Desafio:
A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo. Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO.
Durante a extração os gases saem misturados. Crie um código que, de acordo com a lista, verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá passar por um Filtro Simples. Se houver, imprima no console que deverá passar por um Filtro Especial e especifique qual gás.

Entradas e Saídas:
A entrada será uma lista de listas com as moléculas que devem ser analisadas. A saída deve ser qual filtro deve ser utilizado para filtrar. Caso tenha uma dessas moléculas prejudiciais, a saída deve ser um filtro específico para a molécula X.
Nesse nosso desafio se houver a molécula prejudicial na entrada será apenas UMA.
 */