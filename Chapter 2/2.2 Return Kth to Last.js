const LinkedList = require("./LinkedList");
const printList = require("./printList");

 var kToLast = function(k, list) {
    let fast = list.head;
    let slow = list.head;

    if (!list)
        return 0;

    for (let i = 0; i < k; i++){ //delete all nodes before k
        fast = fast.next; //go to k
    }  
    
    while (fast.next){
        slow.value = fast.value; 
        fast = fast.next; 
        slow = slow.next;
    }
        
    return slow;
           
}

//test
let l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)
l.append(6)

var a = kToLast(2, l);
printList(a);

