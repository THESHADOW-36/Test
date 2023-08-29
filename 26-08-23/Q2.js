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