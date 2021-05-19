const LinkedList = require("./LinkedList");
const printList = require("./printList");

var deleteMiddle = function(node){


  if (node !== null && node.next !== null){ //if a next node exists in which it's not the first or last node
    //delete the node by replacing it with the next nodes
    node.value = node.next.value;
    node.next = node.next.next; 
  }

}

//test
let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.append(item);
}

deleteMiddle(list.head.next);
printList(list.head);