var array = [2, 4, 1, 3, 6, 7, 8]
var missing = 5;

function findMissingNumber(array, num) {
   for (var i = 0; i < array.length; i++) {
      if (array[i] !== num) {
         array.push(num)
      }
      return array;
   }
}

console.log(findMissingNumber(array, missing))