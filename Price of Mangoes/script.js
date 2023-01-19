function mango(quantity, price) {
    var total = Math.floor(quantity / 3) * (2 * price); // calcula o custo dos itens gratuitos
    total += (quantity % 3) * price; // adiciona o custo dos itens não gratuitos
    return total;
}


/* Math.floor() é uma função em JavaScript que arredonda um número para baixo para o número inteiro mais próximo. Ele é definido na classe "Math" e pode ser utilizado para arredondar números de ponto flutuante para inteiros. Por exemplo, se você passar o número 2.7 como argumento para a função Math.floor(), ela retornará o valor 2. Se você passar -2.7, ela retornará -3.
A função Math.floor() é utilizada neste exemplo para arredondar o valor de mangas gratuitas para baixo, garantindo que o valor seja arredondado para baixo e não para cima.*/
