function solution(number) {
  var sum = 0
  for (i = 0 ; i < number ; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
      sum += i
    }
    if(i < 0){
      sum += i
    };
  };
  return sum;
};


// retornar a soma dos numeros multiplos de 3 ou 5 abaixo de number
// number < 0 (negativo) eu tenho que retornar 0



// versao utilizando while
function solution(number) {
    let sum = 0;
    let i = 0;
    if (number < 0) return 0;
    while (i < number) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

//versao utilzando forEach

function solution(number) {
    let sum = 0;
    if (number < 0) return 0;
    Array.from({length: number}, (_, i) => i).forEach(i => {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    });
    return sum;
}

// versao utilzando filter

function solution(number) {
    let sum = 0;
    if (number < 0) return 0;
    Array.from({length: number}, (_, i) => i)
        .filter(i => i % 3 === 0 || i % 5 === 0)
        .forEach(i => sum += i);
    return sum;
}   

// versao utilizando reduce

function solution(number) {
    if (number < 0) return 0;
    return Array.from({length: number}, (_, i) => i)
        .filter(i => i % 3 === 0 || i % 5 === 0)
        .reduce((a, b) => a + b, 0);
}

