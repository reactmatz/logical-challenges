# AquaresToOdd

###### Specifications:

• The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.

• The first input will always be larger than the second.

• All inputs will be valid so no need for error checking.

• Outputs will always be positive.

• Inputs will range between 0 and 200, (inclusive).

• In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.

Examples:

squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"

squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"

squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"

squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"  esqueleto:  function squaresToOdd(sqr1, sqr2)

###### Algoritmo logico:

1-Calcular o quadrado do primeiro input e o quadrado do segundo input.

2-Calcular a diferença entre o primeiro input elevado ao quadrado e o segundo input elevado ao quadrado.

3-Calcular o número de números ímpares consecutivos necessários para a solução usando a fórmula: (diferença entre o primeiro e segundo input) / 2 + 1.

4-Iniciar um loop para contar os números ímpares consecutivos a partir do número ímpar mais baixo (diferença entre o primeiro e segundo input - 1).

5-Concatenar cada número ímpar a uma string, separando-os com " + " e adicionando o sinal " = " no final.

6-Concatenar a string com a expressão final no formato "primeiro input^2 - segundo input^2 = string de números ímpares = resultado final"

7-Retornar a string final.


  
