// Skipped input value type validations


// Ex 1
//Write a recursive function to determine whether all digits of the number are odd or not.

// Option1

function exercise1(n) {
    if (Math.floor(n / 10) === 0) {
        if ((n % 2) === 0) {
            return false
        } else {
            return true
        }
    } else {
        if (((n % 10) % 2) === 0) {
            return false
        } else {
            return exercise1(Math.floor(n / 10))
        }
    }
}

// Option 2

function exercise1_option2(number) {
    let n = number
    let result = true
    if ((n > 0) && ((n % 2) === 0)) {
        return false
    }
    if ((n > 0) && ((n % 2) != 0)) {
        return exercise1_2(Math.floor(n / 10))
    }

    if (n === 0) {
        return result
    }
}


// Ex 2
// Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1)․

function exercise2(array) {
    let arr = [...array]

    if (arr.length != 0) {
        let min = array[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        if (min > 0) {
            return min
        } else {
            arr.splice(arr.indexOf(min), 1)
            return exercise2(arr)
        }
    } else {
        return -1
    }
}

// Ex 3
// Write a recursive function which receives a number as arguments and returns the
// fibonacci sequence as array.

function exercise3(n) {
    if (n === 0) {
        return []
    }
    if (n === 1) {
        return [1]
    }
    if (n === 2) {
        return [1,1]
    }
    if (n > 2) {
        let result = exercise3(n - 1)
        return result.push(result[result.length - 1] + result[result.length - 2])
    }
}


// Ex 4
// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).

function exercise4(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) != "object") {
            result = result.concat(array[i])
        } else {
            result = result.concat(exercise4(array[i]))
        }
    }
    return result
}


// Ex 5
// Given a number. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
// return the result.

function exercise5(number) {
    let n = number
    let sum = 0
    while (n > 0) {
        sum += (n % 10)
        n = Math.floor(n / 10)
    }
    if (sum > 9) {
        return exercise5(sum)
    } else {
        return sum
    }
}