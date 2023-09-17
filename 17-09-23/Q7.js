var array = [1, 2, 3, 4, 2, 6, 7]

function removeDuplicates(array) {
   var newArray = [];
   for (var i = 0; i < array.length - 1; i++) {
      for (var j = i + 1; j < array.length; j++) {
         if (array[i] == array[j]) {
            return array[j]
         }
      }
   }
}

console.log(removeDuplicates(array))