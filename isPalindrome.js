function isPalindrome(word) {
    if (word == word.split("").reverse().join("")) {
        return word + ' is a palindrome.'
    } else {
       return word + ' is not a palindrome.'
    }
}

//const prompt = require("prompt-sync")();
//const word = prompt("Enter word: ");
word = 'racecar'
output = isPalindrome(word);
console.log(output);