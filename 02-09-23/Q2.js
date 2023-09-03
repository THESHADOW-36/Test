var array=[34,24,45,67,68,43,]

function maxNum(array){
    var max = []
    for (var i=0;i<array.length;i++){
        for (var j=i+1;j<array.length;j++){
            if (array[i]>array[j]){
                max=array[i]
            }
        }
    }
    return max
}
console.log(maxNum(array))