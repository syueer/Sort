import { Sort } from './Sort';

class Node {
  value: number;
  next: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export class LinkListCollection extends Sort {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('the linkList is empty');
    }
    let node: Node | null = this.head;
    let count = 0;
    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    throw new Error('did not find the data in linkList');
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let node = this.head;
    let count = 1;
    while (node.next !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  print() {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      return false;
    }
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftHand;
  }
}
