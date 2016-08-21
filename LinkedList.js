/*//Linked List data structure in Javascript
//v 1.0*/

function LinkedListNode(value){
    this.value = value;
    this.next = null;
}

//Append node to end of list, function takes the list and node to be appended as arguments
function push(list,x){
    if(list != null){
        var temp = list;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = x;
    }
}

//Remove node at end of list
function pop(list){
    var temp = list;
    while(temp.next.next != null){
        temp = temp.next;
    }
    delete temp.next;
    temp.next = null;
}

//count number of nodes in list
function count(list){
    var count = 0;
    var temp = list;
    while(temp != null){
        temp = temp.next;
        count++;
    }
    return count;
}

//Insert node at index, function takes the list, the node to be placed, and index as arguments. Function returns the list
function insertAtIndex(list,x,index){
    if(list == null){
        list = x;
        return list;
    }
    
    if(index == 0){
        var newList = x;
        x.next = list;
        return newList;
    }
    
    if(index > count(list) || index < 0){
        print("Error: Indexed out of bounds");
        return list;
    }
    
    var temp = list;
    var counts = 1;
    
    while(temp != null && (counts < index)){
        temp = temp.next;
        counts++;
    }
    var pointer = temp.next;
    temp.next = x;
    x.next = pointer;
    return list;
}

function printList(list){
    var temp = list;
    while(temp != null){
        print(temp.value);
        temp = temp.next;
    }
}

function main(){
    //Define nodes
    // var head = new LinkedListNode("Hello");
    // var two = new LinkedListNode("How");
    // var three = new LinkedListNode("are you?");
    
    //Append nodes to head
    // push(head,two);
    // push(head,three);
    
    // printList(head);
    
    // Remove last node
    // pop(head);
    
    // var four = new LinkedListNode("Me first!");
    
    // Insert node at index
    // head = insertAtIndex(head,four,0);
    
    // printList(head);
    
}

main();