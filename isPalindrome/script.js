var isPalindrome = function(x) {
  let number = x.toString(); // converte o número em uma string
  let reversedNumber = number.split('').reverse().join(''); // inverte a string

  return number === reversedNumber; // verifica se a string original é igual à sua inversa
};
