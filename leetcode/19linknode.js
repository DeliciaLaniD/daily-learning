var head = [1, 2, 3, 4, 5];
var n = 2;
var removeNthFromEnd = function(head, n) {
    var result = [];
    for(var i = 0; i < head.length; i++) {
        if (i === head.length - n) {
           continue; 
        } else {
            result.push(head[i]);
        }
    }
    result = result.join('->')
    return result;
};
console.log(removeNthFromEnd(head, n))

var removeNthFromEnd = function(head, n) {
    const arr = [head];
    for (let current = head; current.next; current = current.next) {
      arr.push(current.next);
    }
    const len = arr.length;   
    if (n === len) {
      arr[0] = head.next;
    } else if (n === 1) {
      arr[len - n - 1].next = null;
    } else {
      arr[len - n - 1].next = arr[len - n - 1].next.next;
    }
    return arr[0];
  };