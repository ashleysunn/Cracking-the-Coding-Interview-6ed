const LinkedList = require("./LinkedList");

function LinkedNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }

var partition = function(head, partitionX){
    const lessThan = new LinkedList(0);
    const greaterThan = new LinkedNode(0);

    let p = head;
    let p1 = lessThan;
    let p2 = greaterThan;

    while (p){
        if (p.val < partitionX){ //add values less than partition value to lessThan linked list
            p1.next = p;
            p = p.next;
            p1.next.next = null;
            p1 = p1.next;
        } else{ //add values greater than partition value to greaterThan linked list
            p2.next = p;
            p = p.next;
            p2.next.next = null;
            p2 = p2.next;
        }
    }

    p1.next = greaterThan.next; //add greaterThan linked lists to the end of lessThan
    return lessThan.next;
}


