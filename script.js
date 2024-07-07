/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
// function isCharAVowel(char) {
        
//     switch (char) {
//         case 'a':
//             return true
//             break;
//         case 'e':
//             return true;
//             break;
//         case 'i':
//             return true;
//             break;
//         case 'o':
//             return true;
//             break;
//         case 'u':
//             return true;
//             break;
//         default:
//             console.log('not a vowel!')
        
//     }
// }

// console.log('Exercise 3 Result:', isCharAVowel('o'));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
    return `${name}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("blackswan", "gmail.com"));
