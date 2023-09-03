var num = [12, 35, 6, 7, 54, 99, 36]

function evenNum(array) {
    var even = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            even.push(array[i])
        }
    }
    return even;
}
console.log(evenNum(num))
