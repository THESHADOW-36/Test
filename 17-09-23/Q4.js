var list1 = [1,1,1]
var list2 = [2,2]

function merge(L1, L2) {
   var list3 = []
   for (var i = 0; i < L1.length; i++) {
      list3.push(L1[i])
   }
   for (var j = 0; j < L2.length;j++){
      list3.push(L2[j])
   }
   return list3;
}

console.log(merge(list1, list2))