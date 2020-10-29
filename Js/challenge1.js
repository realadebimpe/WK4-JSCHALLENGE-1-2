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

function comparator(a, b) {
    a = a.charCodeAt()
    b = b.charCodeAt()
    return a == b ? 0 : a > b ? 1 : -1
    if (a == b) {
        return 0;
    } else if (a > b) {
        return 1;
    } else {
        return -1;
    }
}

function sortString(str = "dcba") {
    return str.split('')
        .sort(comparator)
        .join('')
}

sortString(test);

