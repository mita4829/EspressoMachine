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
    
    // pop(head);
}

main();