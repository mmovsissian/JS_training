


// Skipped input value type validations


// Ex 1
//Given a number. Print “odd” if the number is odd and “even” if it’s even.

function exercise1(n) {
    if (typeof (n) === "number") {
        if (n % 2 === 0)
            return "even"
        else
            return "odd"
    }
}

// Ex 2
// Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

function exercise2(m, n) {
    if (m % n === 0 || n % m === 0)
        return 1
    else return 0
}

// Ex 3
// Given two variables, which are the angles of a triangle. Find the third angle of the
// triangle. (Sum of the angles of a triangle equals 180 degrees).

function exercise3(a, b) {
    return (180 - a - b)
}

// Ex 4
// Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

function exercise4(n) {
    if (n > 0)
        return n.toString() + (n * 2).toString() + (n * 3).toString()
}

// Ex 5
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

function exercise5(n) {
    length = n.toString().length - 1
    if (n > 0)
        if (n % 10 === 0)
            return n
        else
            return n % 10 * Math.pow((10), length) + Math.floor(n / 10)
}

// Ex 6
// Given five numbers as input. Calculate and print the average of the numbers(without
// using arrays).

function exercise6(a, b, c, d, e) {
    return (a + b + c + d + e) / 5
}

// Ex 7 THINK!!!!!!!!!!!
// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function exercise7(n) {
    if ((n % 3 != 0) && (n % 5 != 0) && (n % 7 != 0))
        return  n + " is not a multiple of 3, 5 or 7"
    if (n % (3*5*7)== 0)
        return n + " is a multiple of 3, 5 and 7."
    if (n % (3*5)== 0)
        return n + " is not a multiple of 3 and 5."
    if (n % (3*7)== 0)
        return n + " is not a multiple of 3 and 7."
    if (n % (5*7)== 0)
        return n + " is not a multiple of 5 and 7."
    if (n % (3)== 0)
        return n + " is a multiple of 3."
    if (n % (5)== 0)
        return n + " is a multiple of 5."
    if (n % (7)== 0)
        return n + " is a multiple of 7."
}

// Ex 8
// Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
// year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
// years and more ). Also check that age in months is between 1 and 12.

function exercise8(age, type) {
    if ((type === "months") && (age >= 1) && (age <= 12))
        return "baby"
    if ((type === "years") && (age >= 1))
        if (age <= 2)
            return "toddler"
        else if (age <= 12)
            return "child"
        else if (age <= 17)
            return "teenager"
        else
            return "adult"
}

// Ex 9
// Given three numbers. Sort them by the ascending order.

function exercise9(n1, n2, n3) {
    let max = Math.max(n1, Math.max(n2, n3))
    let min = Math.min(n1, Math.min(n2, n3))
    let mid = n1 + n2 + n3 - max - min
    return min + ", " + mid + ", " + max
}

// Ex 10
// Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
//     The criteria for passing are as follows:
// a. A student passes if all three examinations are passed.
//     b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40.

function exercise10(a, b, c) {
    let array = [a, b, c]
    let count = 0
    if (Math.min(a, b, c) >= 40)
        return "passed"
    for (var i = 0; i < array.length; i++)
        if (array[i] >= 40)
            count++
    if ((count === 2) && (((a + b + c) / 3) >= 50))
        return "passed"
    else
        return "failed"
}

// Ex 11
// Find the sign of product of three numbers without multiplication operator. Display the
// specified sign.

function exercise11(a, b, c) {
    let array = [a, b, c];
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            return "unsigned";
            break;
        }
        if (array[i] < 0)
            count++;
    }
    if (count % 2 !== 0)
        return "-";
    else
        return "+";
}

// Ex 12
// Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations:

function exercise12(a, b, c) {
    if (a == 0)
        return "Enter valid constans"
    else
        x = Math.pow(b, 2) - 4 * a * c
    root = Math.sqrt(x);
    if (x < 0)
        return "Solution does not exists"
    else if (root == 0)
        return "Solution is " + (-b / (2 * a))
    else {
        let x1 = (-b - root) / (2 * a);
        let x2 = (-b + root) / (2 * a);
        return "Solutions are " + x1 + " and " + x2
    }
}

// Ex 13
// Given the following code rewrite it using only two if operators. (Hint: use logical
// operators).

function exercise13() {
    varn = +prompt();

    var i = 0;
    var j = 0;

    if ((n % 2 === 0) && (!Math.floor(n / 10))) {
        i += 1;
    }
    if ((n % 3 === 0) && (n % 10 === 1)) {
        i += 1;
    }
}

// Ex 14
// Insert a digit and a number. Check whether the digits contains in the number or not.

function exercise14(digit, number) {
    number = Math.abs(number)
    if (number === digit) {
        return "Yes"
    }
    while (number != 0) {
        if ((number % 10) === digit) {
            return "Yes"
        }
        number = Math.floor(number / 10)
    }
    return "No";
}

// Ex 15
// Enter a number. Reverse its first and last digits. Print the new number.


function exercise15(n) {
    let number = Math.abs(n)
    let power = n.toString().length - 1
    let count = 0;
    let last = (number % 10)

    let first = Math.floor(number / Math.pow(10, power))
    return number - first * Math.pow(10, power) - last + last * Math.pow(10, power) + first
}

// Ex 17
// Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
//     For the triangle entered numbers are height and and base.

function exercise17(figure, a, b) {
    if (Math.min(a, b) > 0) {
        if (figure === "triangle") {
            let s = a / 2 * b
            return "Square of the triangle is " + s
        }
        if (figure === "rectangle") {
            let s = a * b
            return "Square of the rectangle is " + s
        } else
            return "Please enter only positives"
    }
}

// Ex 18
// Enter a number. Find the difference between its biggest and smallest digits.

function exercise18(number) {
    let devided = Math.abs(number)
    let min = devided % 10
    let max = devided % 10
    if (Math.floor(devided / 10) === 0)
        return 0
    while (devided > 0) {
        let digit = (devided % 10)
        if (digit < min)
            min = digit
        if (digit > max)
            max = digit
        devided = Math.floor(devided / 10)
    }
    return max - min
}