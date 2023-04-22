
export class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

export class List {
  constructor(valList) {
    this.head = this.createList(valList)
  }

  createList(arr) {
    if (arr.length === 0) return null
    let dummy = new ListNode(-1), cur = dummy
    for (let i = 0; i < arr.length; i++) {
      cur.next = new ListNode(arr[i])
      cur = cur.next 
    }
    return dummy.next
  }
   
  getHead() {
    return this.head
  }
}