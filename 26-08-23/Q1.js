var array = ["Dinesh", "Thirunavukkarasu", "Awdiz"];
function lengthOfTheString(array) {
    var Newarray = [];
    for (var i = 0; i < array.length; i++) {
        Newarray.push(array[i].length)
    }
    return Newarray;
}
console.log(lengthOfTheString(array))


var array1 = ['India', 'Canada', 'Australia', 'China', 'Afghanistan']
function stringsLenght(array) {
    var Newarray1 = [];
    for (var i = 0; i < array1.length; i++){
        Newarray1.push(array[i].length)
    }
    return Newarray1;
}
console.log(stringsLenght(array1))


var array2 = ["Javascript", "HTML", "CSS", "React", "Mongodb", "Python"]
function lengthOfString(array){
    var Newarray2 = [];
    for(i=0;i<array.length;i++){
        Newarray2.push(array[i].length)
    }
    return Newarray2;
}
console.log(lengthOfString(array2))