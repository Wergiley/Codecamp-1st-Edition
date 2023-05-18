//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(',')

//TODO: Print no console, para cada índice da lista, os parâmetros
//se a amostra está bom, aceitável ou inaceitável
for(const arvore of amostra) {
  if(arvore >=75) {
    print("Descartar da lista")
  } else if(arvore>=50 && arvore<75) {
    print("Manter sob observação")
  } else if(arvore<50) {
    print("Isolar e iniciar protocolo de cuidados")
  }
}

/*
Sobre o Desafio 
Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale, utilizamos um dispositivo de ultrassom desenvolvido por uma das CleanTechs parceiras, a Cleanduino (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.
Crie um código que, para cada item dessa lista, verifique se a amostra está com um nível: Bom, Aceitável ou Inaceitável. Para cada nível, imprima a ação que deve ser realizada considerando as seguintes regras:

Bom (mais de 75% de saúde na amostra)
Imprima "Descartar da lista"
Aceitável (mais de 50% e menos de 75%)
Imprima "Manter sob observação"
Inaceitável (menos de 50%)
Imprima "Isolar e iniciar protocolo de cuidados"
Lembrando que todas as amostras são de exatamente 100g e as listas terão tamanhos variados.

Entradas e Saídas:
As entradas será uma lista com as porcentagens de saúde das árvores. Para a saída esperamos que seja printado no console, dependendo da porcentagem, se a árvore deve: "Ser descartada da lista", "Manter sob observação" ou "Isolar e iniciar protocolos de cuidados". Essas frases devem ser printadas para cada item da lista.
*/