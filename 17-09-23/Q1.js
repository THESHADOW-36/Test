var nums = [2, 7, 11, 15]
var target = 9;

function sum(num, tar) {
   for (var i = 0; i < num.length-1; i++) {
      for (var j = i + 1; j < num.length; i++) {
         if (num[i] + num[j] == tar){
            return [i,j]
         }
      }
   }
}
console.log(sum(nums, target))


var nums1 = [3,2,4]
var target1 = 6;

function sum(num, tar) {
   for (var i = 0; i < num.length-1; i++) {
      for (var j = i + 1; j < num.length; i++) {
         if (num[i] + num[j] == tar){
            return [i,j]
         }
      }
   }
}
console.log(sum(nums1, target1))