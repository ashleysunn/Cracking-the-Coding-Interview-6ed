const LinkedList = require("./LinkedList");
const printList = require("./printList");

 var kToLast = function(k, list) {
    let cur = list.head;
    //let slow = list.head;

    if (!list)
        return 0;

    while (cur !== null){
        for (let i = 0; i < k; i++){ //delete all nodes before k
            cur = cur.next; //go to the next
        }            
        
        return cur;
    }       
}

//test
let list = new LinkedList();
for (let item of [1, 5, 1, 6, 8, 5, 0]) {
    list.append(item);
}

console.log(kToLast(2, list));
