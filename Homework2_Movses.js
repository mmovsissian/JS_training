

// Skipped input value validation

// Ex 1
// Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function exercise1 (n) {
    result="yes"
    for (let i = 2; i <=n/2 ; i++) {
        if (n%i===0){
            result= "no";
            break;
        }

    }
    return result
}

// Ex2
// Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

function exercise2 (n) {
    let fibonacci=[0,1];
    for (let i = 2; i <=n ; i++) {
        fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
    }
    return fibonacci[n]
}
// Or we can use fibonacci sequence formula, but it will not be a programming exercise :)

// Ex3
// Given a number n( n> 0 ). Print Fibonacci series up to n.

function exercise3 (n) {
    let fibonacci=[0];
    if (n>0) {
        fibonacci.push(1)
        for (let i = 2; i < n-1; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
        }
    }
    return fibonacci.toString()
}

// Ex4
// Insert a number. Calculate product and sum of the digits of the number.
// If product is divisible by the sum, print the quotient, otherwise print the remainder.

function exercise4 (n) {
    number=n;
    product=1;
    sum=0;
    while (number > 0) {
        digit=number%10;
        product*=digit;
        sum+=digit;
        number = Math.floor(number / 10)
    }
    return (n===0)?"Cannot calculate.":(((product%sum)===0)?"Quotient is "+(product/sum):"Remainder is "+(product%sum));
}

// Ex9
// Given three numbers a, b (a ≤ b) and num.
// Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function exercise9 (a,b,num) {
    array = [a];
    let space = (b - a) / (num - 1)
    if (num === 1) {
        return array
    } else {
    for (let i = 1; i < (num - 1); i++) {
        array.push(Math.round((a + space * i)*10)/10)
    }
    array.push(b)
    return array
    }
}

// Ex10
// Given an array of numbers. Find the index of the second maximum element.
// used spread operator in the second option

// Option 1
function exercise10_1 (array) {
    let arr=[]
    for (let i = 0; i <array.length ; i++) {
        arr[i]=array[i]
    }

    let max=arr[0]

    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]>max){max=arr[i]}
    }

    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]===max){
            arr.splice(i,1);
            i--;
        }
    }
    max=arr[0]
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]>max){max=arr[i]}
    }
    return array.indexOf(max)
}

// Option 2
function exercise10_2 (array) {
    let arr=[...array]
    let max=Math.max.apply(null,arr)

    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]===max){
            arr.splice(i,1);
            i--;
        }
    }
    max=Math.max.apply(null,arr)

    return array.indexOf(max)
}


// Ex11
// Given an array of numbers, padding amount and repeat count.
//     Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges,
//     the repeat amount specifies how many times the pad should be repeated.
//     Also, you should check that  padding amount <= length of array.

// used spread syntax
function exercise11 (array, pad, repeat) {
    let start = [];
    let end = [];
    let len=array.length

    if (pad > array.length) {
        return "Invalid padding amount"
    } else{
        for (let i = 0; i < len; i++) {
            if (i<pad){start.push(array[i])}
            if (i>=len-pad){end.push(array[i])}
        }
    for (let i = 0; i <repeat ; i++) {
            array.unshift(...start)
            array.push(...end)
        }
        return array
    }
}
