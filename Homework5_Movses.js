// Skipped input value type validations


// Ex 1
// Given a sorted array and an element from that array. Find the index of that
// element using binary search.

function exercise1_1(array,element, l=0) {
    let mid=Math.floor((array.length) / 2)
    if (array[mid]< element){
        return exercise1(array.slice(mid, array.length),element, l+mid)
    }
    if (array[mid]> element){
       return  exercise1_1(array.slice(0,mid),element, l)
    }
    if (array[mid]==element)
        return mid+l
}

console.log(exercise1_1([0,1,2,3,4,5],0))

function exercise1_2(array,element){
    let start=0
    let end=array.length-1
    while (start<=end){
        let mid=Math.floor((start+end) / 2)
        if (array[mid]==element){
            return mid
        }
        if (array[mid]>element){
             end=mid-1
        }
        if (array[mid]<element){
             start=mid+1
        }
    }
}
console.log(exercise1_2([0,1,2,3,4,5,6],0))


// Ex 2

function exercise2(array, id = 'root') {
    let result = {};
    let children = [];
    array.forEach((item) => {
        if (item.id == id) {
            children.push(...item.children)
        }
    })
    if (children.length == 0) return {};
    children.forEach((item) => {
        result[item] = exercise2(array, item)
    })
    return (id == "root") ? {[id]: result} : result;
}


console.log(JSON.stringify(exercise2([
    {children: [1,2], id:'root'},
    {children: [3,4], id:1},
    {children: [5], id:2},
    {children: [], id:3},
    {children: [6], id:4},
    {children: [], id:5},
    {children: [], id:6}]
)));