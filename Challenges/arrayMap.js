// Challenges/arrayMap.js
function arrayMap(arr, fn) {
    if (!Array.isArray(arr) || typeof fn !== 'function') {
        throw new Error('Invalid input');
    }
    return arr.map(fn);
}

// Example usage:
console.log(arrayMap([1, 2, 3], x => x * 2)); // [2, 4, 6]
