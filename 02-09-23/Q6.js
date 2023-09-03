var array = [2, 3, 5]

function factorial(array) {
    var multi = array[0];
    for (var i = 1; i < array.length; i++) {
        multi = multi * array[i];
    }
    return multi;
}
console.log(factorial(array))