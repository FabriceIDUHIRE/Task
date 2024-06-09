// Challenges/stringTransform.js
function stringTransform(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input');
    }
    return str.split('').reverse().join('');
}

// Example usage:
console.log(stringTransform('hello')); // 'olleh'
