import { Sort } from './Sort';

export class NumberCollection extends Sort {
  constructor(public data: number[]) {
    super();
  }
  get length() {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const lefthand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = lefthand;
  }
}
