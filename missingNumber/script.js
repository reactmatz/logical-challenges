// Você recebe um array de números inteiros ordenados em ordem crescente, sem números repetidos. Um dos números está faltando nesse array. Escreva uma função em JavaScript que encontre o número faltante.

const numeros = [1, 2, 3, 5, 6, 7, 8];
const numeroFaltando = encontrarNumeroFaltando(numeros); // retorna 4

// Guia logico:

// Use um loop for para iterar pelos números do array.
// Compare cada número com o próximo número no array.
// Se houver uma diferença de mais de 1 entre os números, o número faltante está entre eles.
// Use a declaração return para retornar o número faltante.

function encontrarNumeroFaltando(numeros) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] - numeros[i] > 1) {
      return numeros[i] + 1;
    }
  }
}


// Explicação:

// A função encontrarNumeroFaltando recebe um array de números como parâmetro.
// Em um loop for, a função itera pelos números do array.
// A função compara cada número com o próximo número no array.
// Se houver uma diferença de mais de 1 entre os números, a função retorna o número faltante.
// Caso contrário, se nenhum número estiver faltando, a função não retorna nada.