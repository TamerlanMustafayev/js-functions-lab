/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(char) {
    
    let vowels = ['a', 'e', 'i', 'o', 'u']    
    for (let i = 0; i < vowels.length; i++) {

        if (char === vowels[i]) {
            return true
            console.log(char)
        } else {
            return false
        }
    }
}

console.log('Exercise 3 Result:', isCharAVowel('e'));


