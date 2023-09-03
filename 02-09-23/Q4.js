var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function reverse(array) {
    for (var i = array.length-1; i >= 0; i--) {
        console.log(array[i])
    }
}
console.log(reverse(array))
