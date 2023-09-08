// var a;
// a = "*";
// for (i = 0; i < 4; i++) {
//     for (j = 0; j < i; j++){
//         console.log(a);
//         a =  a+("*");
//     }
// }


var input = 6;
function printStars(num) {
    for (var i = 1; i <= num; i++) {
        var pattern = ""
        for (j = 1; j <= i; j++) {
            pattern = pattern + "*";
        }
        console.log(pattern)
    }
}
printStars(input)

var string = "abcdba";
function checkP(str) {
    if (str.length < 2) {
        return "Str not valid"
    }
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(checkP(string))

var string1 = "radar"
function palindrome(str) {
    if (str.length < 2) {
        return "Not valid"
    }
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(palindrome(string1))