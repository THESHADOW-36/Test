var num = [23, 48, 11, 87, 30, 53, 8, 34, 65, 15];

function smallNumber(array) {
    var smallestNum = array[0];
    for (var i = 1; i < array.length; i++) {
        // console.log(smallestNum, array[i], smallestNum > array[i])
        if (smallestNum > array[i]) {
            smallestNum = array[i];
        }
    }
    return smallestNum;
}
console.log(smallNumber(num))

var num1 = [19, 32, 45, 89, 15, 45, 67, 85, 17, 27];

function smallNumber1(array) {
    var smallestNum1 = array[0];
    for (var i = 1; i < array.length; i++) {
        if (smallestNum1 > array[i]) [
            smallestNum1 = array[i]
        ]
    }
    return smallestNum1;
}
console.log(smallNumber1(num1))

var num2 = [3, 5, 6, 8, 9, 1, 2, 4, 7]

function smallestNumber2(array) {
    var smallestNum2 = array[0]
    for (var i = 1; i < array.length; i++) {
        if (smallestNum2 > array[i]) {
            smallestNum2 = array[i]
        }
    }
    return smallestNum2;
}
console.log(smallestNumber2(num2))


var num3 = [13, 65, 48, 41, 96, 78, 65, 12, 65, 82, 34]
function smallestNumber3(array) {
    var smallestNum3 = array[0]
    for (var i = 0; i < array.length; i++) {
        if (smallestNum3 > array[i]) {
            smallestNum3 = array[i]
        }
    }
    return smallestNum3;
}
console.log(smallestNumber3(num3))