// ➞ intruction of codewars

// ["A", "_", "C", "_", "B"]   # answer key
// ["A", "D", "C", "E", "B"]   # student's solution

// ➞ True

// # Possible for student to get all questions correct.

// ["B", "_", "B"]   # answer key
// ["B", "D", "C"]   # student's solution

// ➞ False

// # First question is correct but third is wrong, so not possible to score 100%.

// ["T", "_", "F", "F", "F"]   # answer key
// ["F", "F", "T", "T", "T"]   # student's solution

// ➞ True

// # Possible for student to get all questions incorrect.

// ------------------------------------------------------- //

// <<  general abstraction of de problem >>
// my notepad in portuguese('cause i'm brazillian) -->

// - retorna true se o aluno obtiver 100% de acerto ou 100% de erro
// - desconsidera a resposta do aluno se "_" estiver comparado a resposta do aluno
// - retorna false se o aluno errou alguma questao e acertou outras
// - retorna false se o aluno errou todas as questoes mas acertou uma

// i will translate for you, if you dont undertand portuguese -->

// Returns true if the student achieves 100% accuracy or 100% error.
// Ignores the student's response if "_" is compared to the student's answer.
// Returns false if the student answered some questions incorrectly and others correctly.
// Returns false if the student answered all questions incorrectly but got one right. <-- this is was my initial thoughts

// so i abstracted the input for my teste in local machine 



// so firt of all, e need understand some behaviors of javascript than i was not shore  if will works, so let try this:

const array1 = [1,2,4];
const array2 = [1,2,4];

if(array1 == array2){
  console.log("arrays iguais");
}else {
  console.log('arrays diferentes');
}
// and in the console returns false, even though the arrays looks like the same, and i asked for chatgpt, why this is happening e how this is works, and he gived a pretty much long answer, than i will resume here below. --> :
// -When it comes to objects such as arrays, the equality operator(==) checks whether the references point to the same object in memory, not whether the objects have the same contents. "To compare whether two arrays have the same set of elements, you need to check each element individually or use methods like JSON.stringify, which converts the array to a JSON string".

// -so iccepeted the advice of the increarable IA, and i maked a shi** code based on that, just kidding this is was a initial step to deeply understand the problem, dont shame yourself when you are in a way of solution and you create some wierd things, its completely normal, and make part of the process, and this is how you will lern something new.

let key = ['A', '_', 'C', '_', 'B'];
let answers = ['A', 'T', 'C', 'F', 'B'];

function possiblyPerfect(key,answers) {
  for(let i = 0; i < key.length; i++){
    if(key[i] === "_"){
      key[i] = null;
      answers[i] = null;
    }
  }
  if(JSON.stringify(key) === JSON.stringify(answers)){
    return true;
  }else {
    return false;
  }
}
possiblyPerfect(key,answers);

// so basically, i make some tests running 'node script.js' and return what i wanted, but i forgot of one test, the one with which it says "if all answers wrong, will be return = true", and thats what exactly what the test in codewars warning me " expected false to equal true", but i not realize this instantly, i fight to save my code, i wanted to believe the code i wrote would work on the first try(realidade: n funfou de primeira, triste ne)

// fast tip of the life: "If you're very sure from the outset that you're right about something that's supposed to be complex for you, you're probably wrong."

//so before i give you the right solution, i will exposed my poor junior developer thoughts -->
// ""

// console.log(possiblyPerfect(key, answers));

// minha solucao  
function possiblyPerfect(key, answers) {
  let todasCorretas = true;
  let todasIncorretas = true;
  
  for (let i = 0; i < key.length; i++) {  
    if (key[i] === "_") {
      continue;
    } else if (key[i] !== answers[i]) {
      todasCorretas = false; 
    } else {
      todasIncorretas = false; 
    }
  }
  
  return todasCorretas || todasIncorretas; 
}

// solution delivered for IA
function possiblyPerfect(key, answers) {
  let allCorrect = true;
  let allIncorrect = true;
  
  for (let i = 0; i < key.length; i++) {
      if (key[i] === "_") {
          continue; // Skip incomplete questions
      }
      
      if (key[i] !== answers[i]) {
          allCorrect = false; // Key and answer don't match, so not all correct
      } else {
          allIncorrect = false; // Key and answer match, so not all incorrect
      }
  }
  
  return allCorrect || allIncorrect; // Return true if all correct or all incorrect, otherwise false
}

// null
// true
// false

// - retorna true se o aluno obtiver 100% de acerto ou 100% de erro
// - desconsidera a resposta do aluno se "_" estiver comparado a resposta do aluno
// - retorna false se o aluno errou alguma questao e acertou outras
// - retorna false se o aluno errou todas as questoes mas acertou uma

// // exemplo:
// const array1 = [1,"_",3,4];
// const array2 = [1,2,3,4];

// // converter para isso:
// const Array1 = [1,"_",3,4];
// const Array2 = [1,"_",3,4];

// // ou isso:
// const array3 = [1,"_",3,4];
// const array4 = [1,2,3,4];

// // para isso:

// const array3 = [1,null,3,4];
// const array4 = [1,null,3,4];

// o indice do segundo array correspondente ao indice que contem o  "_" deve ser alterado para um valor igual, seja null ou a propria String, qual e mais eficiente ? em termos que no final devemos comparar se os arrays sao iguais, e se forem, devemos retornar true


