module.exports = factors;

function factors(integer, limit) {
  let result = [];

  for (let num = limit; num <= integer; num++) {
    if (integer % num === 0) {
      result.push(num);
    }
  }

  return result;
}



//   Neste Kata você deve encontrar os fatores inteiros até o limite, incluindo o número limite. Não haverá números negativos. Retorne o resultado como uma matriz de números em ordem crescente.

//   Se o limite for maior que o número inteiro, retorne uma lista vazia

//   Como desafio, veja se você consegue fazer isso em uma linha
