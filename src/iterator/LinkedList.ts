export class LinkedList<T> implements Iterable<LinkedListNode<T>> {
  
  head: LinkedListNode<T>

  static fromArray<T>(nodes: LinkedListNode<T>[]): LinkedList<T> {
    const list = new LinkedList<T>()
    for (let n of nodes) {
      list.add(n)
    }
    return list
  }
  
  add(node: LinkedListNode<T>): LinkedList<T> {
    if (!this.head) {
      this.head = node
      return this
    }
    // find the last one using the iterator
    // then attach the node to it
    const iterator = this[Symbol.iterator]()
    let current = iterator.next()
    let previous = current.value
    while (!current.done) {
      previous = current.value
      current = iterator.next()
    }
    previous.next = node
    return this
  }

  get length(): number {
    let count = 0
    const iterator = this[Symbol.iterator]()
    let current = iterator.next()
    while (!current.done) {
      current = iterator.next()
      count++
    }
    return count
  }

  // using iterator directly
  [Symbol.iterator](): Iterator<LinkedListNode<T>> {
    let current = this.head
    let previous = current
    return {
      next(): IteratorResult<LinkedListNode<T>> {
        previous = current
        if (current) {
          current = current.next
          return { value: previous, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }

}

export class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>
  constructor(value: T, next: LinkedListNode<T> = null) {
    this.value = value
    this.next = next
  }
}
