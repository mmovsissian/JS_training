// Skipped input value type validations


// Ex 1
// 1. Given an array. Determine whether it consists only from unique elements or not.

function exercise1(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j] && i != j)
                return false
        }
    }
    return true
}

// console.log(exercise1([1,2, 3,4,5]))


// Ex 2
// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function exercise2(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            sum += Math.pow(array[i], 2)
    }
    return sum
}

// console.log(exercise2([1,2,3,4,25]))


// Ex 3
// 3. Check whether string is palindrome, or not.

function exercise3(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i))
            return false
    }
    return true
}

// console.log(exercise3("asddsa"))


// Ex 4
// 4. Given a word and a list of possible anagrams, select the correct sublist.

function exercise4(word, list) {
    result = []
    list.forEach(item => {
        if (word.split('').sort().join('') === item.split('').sort().join('')) {
            result.push(item)
        }
    })
    return result
}

console.log(exercise4("listen", ["enlists", "google", "inlets", "banana"]))
console.log(exercise4("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]))
