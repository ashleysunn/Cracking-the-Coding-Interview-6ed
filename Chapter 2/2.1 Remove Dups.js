const LinkedList = require("./LinkedList");

function removeDups(list){
    const llSet = new Set();
    let cur = list.head;
    let prev = null;

    while (cur !== null){
        if (llSet.has(cur.value)){ //find dups
            let holder = cur;
            prev.next = cur.next; //skip this node and go to the next
            cur = cur.next; //skip this node and go to the next
            holder.next = null; //delete duplicate node
        }
        else{
            llSet.add(cur.value); //add the non dups to the set
            prev = cur; //move prev to the next node
            cur = cur.next; //move cur to the next node
          }
    }  
}

//test
let list = new LinkedList();
for (let item of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(item);
}

removeDups(list);

console.log(list._toArray()); // [1, 5, 6, 8]