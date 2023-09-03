var array = [12, 35, 65, 76, 68, 43]

function sumOfNum(array) {
    var sumOfTotalNum = array[0];
    for (var i = 1; i < array.length; i++) {
        sumOfTotalNum = sumOfTotalNum + array[i];
    }
    return sumOfTotalNum;
}
console.log(sumOfNum(array))