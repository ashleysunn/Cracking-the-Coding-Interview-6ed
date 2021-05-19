
const LinkedList = require('./LinkedList');

function loopDetect(list){
    const llSet = new Set();
    let fast = list.head;
    let slow = list.head;
    
    if (!list || !fast || !fast.next)
        return null;

    while (fast && fast.next){
        if (llSet.has(fast.value)){ //find looping value
            break;
        } else{
            fast.value = fast.next.value;
            fast.next = fast.next.next; 
        }
    }  
        return fast;
}
    
//test
let list = new LinkedList();
for (let item of ['A', 'B', 'C', 'D', 'E', 'C']) {
    list.append(item);
}
    
loopDetect(list);
console.log(list._toArray()); // ['C']