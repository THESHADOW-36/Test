// var a;
// a = "*";
// for (i = 0; i < 4; i++) {
//     for (j = 0; j < i; j++){
//         console.log(a);
//         a =  a+("*");
//     }
// }

var input = 4;
function printStars(num) {
    for (i = 0; i <= num; i++) {
        var pattern = ""
        for (j = 0; j <= i; j++) {
            pattern = pattern + "*";
        }
        console.log(pattern)
    }
}
printStars(input)