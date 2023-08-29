var A = [1, 2, 4, 5, 7, 8]
var B = [3, 7, 0, 2, 6, 4]

function identical(a, b) {
    var C = [];
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            // console.log(a[i],b[j])
            if (a[i] === b[j]) {
                C.push(a[i])
            }
        }
    }
    return C;
}
console.log(identical(A, B))


var array1 = [23, 45, 67, 94, 31, 34, 57, 66, 72, 12, 48]
var array2 = [32, 54, 76, 48, 24, 72, 88, 67, 45, 21, 84]

function identical1(array1, array2) {
    var arrayMix = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i]=== array2[j]){
                arrayMix.push(array1[i])
            }
        }
    }
    return arrayMix;
}
console.log(identical1(array1, array2))


var num1 = [123,454,576,823,342,632,555,868,983,323]
var num2 = [234.786,987,555,323,576,254,123,454,420]

function identical2(num1,num2){
    var numMix = [];
    for(var i=0;i<num1.length;i++){
        for(var j=0;j<num2.length;j++){
            if(num1[i] === num2[j]){
                numMix.push(num1[i])
            }
        }
    }
    return numMix;
}
console.log(identical2(num1,num2))