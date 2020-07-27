function LinkedList(){
    var head;
    var length =0;
    var Node = function (val){
        this.val = val
        this.next = null
    }
    this.append = function(val){
        let newNode = new Node(val)
        if(!head){
            head = newNode
        }else{
            let current = head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        length++;
    }
    this.remove = function(position){
        if(-1<position&&position<length){
            let current = head
            let node = null;
            if(position==0){
                head=current.next
                return;
            }
            while(position!=1){
                current = current.next
                position--;
            }
            node = current.next.next
            current.next = node
            length--;
        }else{
            return null
        }
    }
    this.insert = function(position,val){
        if(-1<position&&position<length){
            let newNode = new Node(val)
            let current = head
            let node = null;
            if(position==0){
                newNode.next = current
                head = newNode
                return;
            }
            while(position!=1){
                current = current.next
                position--;
            }
            node = current.next
            current.next = newNode
            newNode.next = node
            length++;
        }else{
            return false
        }
    }
    this.toString = function(){
        let current = head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    this.getLength = function(){
        console.log(length)
    }
}
var li = new LinkedList()
li.append(1)
li.append(2)
li.append(3)
// li.remove(0)
li.insert(2,4)
li.toString()
