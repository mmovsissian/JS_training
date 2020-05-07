// Skipped input value type validations


// Ex 1
// Given an array. Write a recursive function that removes the first element and returns
// the given array. (without using arr.unshift(),assign second element to first, third element
// to second...)

function exercise1(array,l=0) {

    if (array.length==0){
        return array
    }
    else if (array.length==1+l){
        array.length=array.length-1
        return array
    }
    else
    { array[0+l]=array[1+l]
    return exercise1(array,++l)
    }
}

console.log(exercise1([6, 78, 'n', 0, 1]))
console.log(exercise1([5]))

// Ex 2
// Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.

function exercise2(obj) {
    let result={}
    for (key in obj) {
        if(result.hasOwnProperty(obj[key])){
            result[obj[key]]= Array.isArray(result[obj[key]])?result[obj[key]].concat([key]):[result[obj[key]], key]
        }
        else {
            result[obj[key]]=key
        }
    }
    console.log(result)
}


// Ex 3
// Output the books sorted by the percent in descending order which readStatus is true.

function exercise3(array){
    return result=array.sort((a, b) => b.percent - a.percent).filter( (e) => e.readStatus)
}

exercise3([
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
])

// Ex 4
// Given an array and a number N.  Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function exercise4(array, n){
    if (n>0){
        array.push(array.shift())
        return exercise4(array, n-1)
    }
    if (n<0){
        array.unshift(array.pop())
        return exercise4(array, n+1)
    }
    if(n==0) {
         return array}
}


console.log(exercise4(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))
console.log(exercise4(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2))

// Ex 5
// Create a function that builds a tree like object given an array with object which
// contains parent and id properties.

// Also considered the case when more than one item have Null parent
function exercise5(array) {
    let start=array.filter(node=> node.parent===null).sort((a,b)=>a.id-b.id)
    let arr=array.sort((a,b)=>a.id-b.id)

    let objects=[]
    for (let i =0; i <=arr.length ; i++) {
        objects[i]={}
    }
    array.forEach(item=>{
        if (item.parent!==null){
            objects[item.parent][item.id]=objects[item.id]
        }})

    let result={};
    for (let i =0; i <start.length ; i++) {
        result[start[i].id]=objects[i]
    }
    return result
}

exercise5([
    {parent: null, id:0},
    {parent: 0, id:1},
    {parent: 0, id:2},
    {parent: 1, id:3},
    {parent: 1, id:4},
    {parent: 2, id:5},
    {parent: 4, id:6}]
)



// Ex 6 Done, needs improvement
// Write a JavaScript function to get all possible subsets of given length of the given
// array.

function exercise_6(array, n) {
    let i, j, result, start, subsets;
    if (n > array.length || n <= 0) {
        return [];
    }
    if (n == array.length) {
        return [array];
    }
    if (n == 1) {
        result = [];
        for (i = 0; i < array.length; i++) {
            result.push([array[i]]);
        }
        return result;
    }
    result = [];
    for (i = 0; i < array.length - n + 1; i++) {
        start = array.slice(i, i + 1);
        subsets = exercise_6(array.slice(i + 1), n - 1);
        for (j = 0; j < subsets.length; j++) {
            result.push(start.concat(subsets[j]));
        }
    }
    return result;
}

console.log(JSON.stringify(exercise_6([1, 2, 3, 4, 5], 4)))

// Ex 7 Done
// Create constructor function which instances would be objects with already
//     implemented method map (like Array.map)

function objectWithMapMethod() {
    this.map = function (fn) {
        let result = {};
        for (let i in this) {
            (i!=="map")&&(result[i] = fn(this[i], i));
        }
        return result
    }
}
    obj= new objectWithMapMethod()

    obj.a=1
    obj.b=2
    obj.c=3
    obj.d=4


   console.log(obj.map(el=> el*2))
