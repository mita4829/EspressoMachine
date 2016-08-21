//Binary Tree data structure in Javascript
//v 1.0.2

function BinaryTreeNode(key,value,left,right){
    //Define more variables here that each node will have
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
}

//Append node x to tree head
BinaryTreeNode.prototype.appendBinaryTreeNode = function(head,x){
    if(head == null){
        head = x;
        return;
    }
    
    if(x.key > head.key){
        if(head.right == null){
            head.right = x;
            return;
        }
        head.appendBinaryTreeNode(head.right,x);
        return;
        
    }else if(x.key < head.key){
        if(head.left == null){
            head.left = x;
            return;
        }
        head.appendBinaryTreeNode(head.left,x);
        return;
    }
};

//Remove node x from tree head
BinaryTreeNode.prototype.removeBinaryTreeNode = function(head,x){
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
            head.left = head.removeBinaryTreeNode(head.left,head);
            return head;
        }
    }
    else if(head.key < x.key){
        head.right = head.removeBinaryTreeNode(head.right,x);
    }else if(head.key > x.key){
        head.left = head.removeBinaryTreeNode(head.left,x);
    }
    
    return head;
}

//Helper function for removing nodes
BinaryTreeNode.prototype.findReplacement = function(x){
    var temp = x;
    while(temp.right != null){
        temp = temp.right;
    }
    return temp;
}

//Print tree
BinaryTreeNode.prototype.printTree = function(head){
    if(head == null){
        return;
    }
    head.printTree(head.left);
    print(head.value);
    head.printTree(head.right);
}

//Count nodes in tree
BinaryTreeNode.prototype.count = function(head){
    if(head == null){
        return 0;
    }
    return head.count(head.left) + head.count(head.right) + 1;
}

function main(){
    // define a new head BinaryTreeNode
    // var head = new BinaryTreeNode(0,"some info",null,null);
    
    // append BinaryTreeNode to head
    // var smartyHead = new BinaryTreeNode(1,"some info",null,null);
    
    // head.appendBinaryTreeNode(head,smartyHead);
    
    
    // remove BinaryTreeNode
    // head.removeBinaryTreeNode(head,smartyHead);
    
    // clean up
    // delete smartyHead;
    // delete head;
    // smartyHead = null;
    // head = null;
}


main();