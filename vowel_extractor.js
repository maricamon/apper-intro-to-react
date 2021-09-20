const onlyVowelsOf = (word) => {
    letters = Array.from(word);
    vowels = letters
        .filter(letter => 'AEIOUaeiou'.includes(letter))
        .map(letter => letter)
    return vowels.join("")
}

//const prompt = require("prompt-sync")();
//const word = prompt("Enter word: ");
const word = 'hello'
vowels = onlyVowelsOf(word)
console.log(vowels)