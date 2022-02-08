import { Sort } from './Sort';

export class StringCollection extends Sort {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const array = this.data.split('');
    const leftHand = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = leftHand;
    this.data = array.join('');
  }
}
