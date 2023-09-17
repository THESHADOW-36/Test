var x = 121

function Palindrome(x) {
   for (var i = 0; i < x.length / 2; i++) {
      if (x[i] !== x[x.length - 1 - i]) {
         return false
      }
   }
   return true;
}

console.log(Palindrome(x))