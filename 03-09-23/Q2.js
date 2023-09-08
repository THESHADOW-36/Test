// var input = "racecar"
// j=input.length-1;
// function palindrome(string) {
//     for (i = 0; i <= j; i++) {
        
//             if(string[i] == string[j]){
//                 // console.log("true")
//                 console.log
//             }else{
//                 console.log("false")
//             }
//             j--;
//         }
//     }

// palindrome(input)

// Raju



var string = "abcba";

function checkP(str) {
    if(str.length < 2){
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


