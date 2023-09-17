var lists = [[1, 4, 5], [1, 3, 4], [2, 6]]

function linkedList(lists) {
   var linkedLists = []
   for (var i = 0; i < lists.length; i++) {
      lists[i].forEach(element => {
         linkedLists.push(element)
      });
   }
   return linkedLists
}
console.log(linkedList(lists))
