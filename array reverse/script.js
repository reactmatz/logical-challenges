// oque e metodo reverse()

let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // Output: [5, 4, 3, 2, 1]

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str) {
    let words = str.split(" ");
    words.reverse();
    return words.join(" ");
}
// output : battle no requires which that is victory greatest The

// desafio completo !
