// Challenge 1: Write a function called sortString that takes a string of letters 
// and returns a string with the letters sorted in alphabetical order.

// Example:

// Input:
// 'dcba'
// 'zycxbwa'
// 'AzycxbCwBaA'
// Expected Output:
// 'abcd'
// 'abcwxyz'
// 'AABCabcwxyz'

let test = "dcba";

function sortString(str) {
    return str.split('')
        .sort()
        .join('')
}

sortString(test);

