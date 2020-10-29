// Challenge 2: Write a function which counts the number of vowels in a given string. 
// Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function 
// would result in the number 3 being returned.



let vowel = "aeiou";
function vowelCount(str) {
    let count = 0;
    for (let i = 0; i <str.length; i++){
        if (vowel.indexOf(str[i].toLowerCase()) !== -1) {
            count += 1;
        }
    }
    return count;
}

vowelCount("Hello world!");