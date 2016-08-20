//Binary Tree data structure in Javascript

function Node(key,value,left,right){
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
}

Node.prototype.appendNode = function(head,x){
    if(head == null){
        head = x;
        return;
    }
    
    if(x.key > head.key){
        if(head.right == null){
            head.right = x;
            return;
        }
        head.appendNode(head.right,x);
        return;
        
    }else if(x.key < head.key){
        if(head.left == null){
            head.left = x;
            return;
        }
        head.appendNode(head.left,x);
        return;
    }
};

Node.prototype.removeNode = function(head,x){
    if(head == null){
        return;
    }
    if(head.value == x.value){
        //No children
        if(head.left == null && head.right == null){
            delete head;
            return null;
        }
        //One child
        else if(head.right == null || head.left == null){
            if(head.right == null){
                var save = head.left;
                delete head;
                return save;
            }
        }
        //Two children
        else{
            var save = head.findReplacement(head.left);
            head.value = save.value;
            head.key = save.key;
            head.left = head.removeNode(head.left,head);
            return head;
        }
    }
    else if(head.key < x.key){
        head.right = head.removeNode(head.right,x);
    }else if(head.key > x.key){
        head.left = head.removeNode(head.left,x);
    }
    
    return head;
}

Node.prototype.findReplacement = function(x){
    var temp = x;
    while(temp.right != null){
        temp = temp.right;
    }
    return temp;
}

Node.prototype.printTree = function(head){
    if(head == null){
        return;
    }
    head.printTree(head.left);
    print(head.value);
    head.printTree(head.right);
}

function main(){
    // define a new head node
    // var head = new Node(0,"some info",null,null);
    
    //append node to head
    // var smartyHead = new Node(1,"some info",null,null);
    // head.appendNode(head,smartyHead);
    
    //remove node
    // head.removeNode(head,smartyHead);
}


main();