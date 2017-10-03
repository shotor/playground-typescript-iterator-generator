import { LinkedList, LinkedListNode } from "../../src/generator/LinkedList";

describe('Linked List using Generator tests', () => {

  test('Can create Linked List with single node', () => {
    const list = new LinkedList()
    const node = new LinkedListNode(5)

    list.add(node)

    expect(list.head).toBe(node)
    expect(list.head.value).toBe(5)
    expect(list.length).toBe(1)
  })

  test('Can create Linked List from array', () => {
    const nodes = [
      new LinkedListNode(5), 
      new LinkedListNode(6), 
      new LinkedListNode(12)
    ]
    const [first, second, third] = nodes

    const list = LinkedList.fromArray(nodes)

    expect(list.head.value).toBe(first.value)
    expect(list.head.next.value).toBe(second.value)
    expect(list.head.next.next).toBe(third)

    expect(list.length).toBe(3)
  })

  test('Can use array spread on Linked List', () => {
    const nodes = [
      new LinkedListNode(5), 
      new LinkedListNode(6), 
      new LinkedListNode(12)
    ]
    const values = nodes.map(x => x.value)

    const list = LinkedList.fromArray(nodes)

    const result = [...list].map(x => x.value)
    expect(result).toEqual(values)
  })

  test('Can use for of on Linked List', () => {
    const nodes = [
      new LinkedListNode(5), 
      new LinkedListNode(6), 
      new LinkedListNode(12)
    ]
    const values = nodes.map(x => x.value)

    const list = LinkedList.fromArray(nodes)

    let i = 0
    for (let node of list) {
      expect(node.value).toBe(values[i])
      i++
    }
  })

})
