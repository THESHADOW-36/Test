var array = [2, 34, 55, 72, 37, 24, 88, 79, 91]
function even(array) {
    var EvenNumbers = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            EvenNumbers.push(array[i])
        }
    }
    return EvenNumbers;
}
console.log(even(array))

var array1 = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18]
function EvenNumbers1(array) {
    var EvenNumbers1 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            EvenNumbers1.push(array[i])
        }
    }
    return EvenNumbers1;
}
console.log(EvenNumbers1(array1))


var array2 = [21, 33, 25, 6, 76, 13, 445, 342, 231, 256, 69, 90]
function EvenNumbers2(array) {
    var EvenNumbers2 = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0){
            EvenNumbers2.push(array[i])
        }
    }
    return EvenNumbers2;
}
console.log(EvenNumbers2(array2))

var array3 = [1,2,94,46,67,345,56,342,456,74,246,675,76,8,345,16,36]
function EvenNumbers3(array){
    var EvenNumbers3 = []
    for(var i=0;i<array.length;i++){
        if(array[i] % 2 == 0){
            EvenNumbers3.push(array[i])
        }
    }
    return EvenNumbers3;
}
console.log(EvenNumbers3(array3))