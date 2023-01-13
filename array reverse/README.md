# oque e metodo reverse()

O método reverse() é usado para inverter a ordem dos elementos de um array. No exemplo acima, o array nums contém [1, 2, 3, 4, 5] e o método reverse() é chamado sobre ele. Isso inverte a ordem dos elementos no array, fazendo com que o array se torne [5, 4, 3, 2, 1]. Isso é exibido no console usando console.log(nums).

let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // Output: [5, 4, 3, 2, 1]

## Desafio:

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

## como resolver ? voce vai precisar de mais 2 metodos, os mesmo sao metodos de manipulacao de string

function reverseWords(str) {
    let words = str.split(" ");
    words.reverse();
    return words.join(" ");
}

Essa função pega uma string como entrada e usa o método split(" ") para dividi-la em um array de palavras. Em seguida, o método reverse() é chamado sobre esse array, o que inverte a ordem das palavras. Finalmente, o método join(" ") é chamado para juntar as palavras de volta em uma string, com um espaço entre cada palavra. A função retorna essa string invertida.

Então, se você passar a string "The greatest victory is that which requires no battle" para a função reverseWords(), ela retornará "battle no requires which that is victory greatest The".

// desafio completo !
