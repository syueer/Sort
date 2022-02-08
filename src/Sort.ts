export abstract class Sort {
  abstract length: number;
  abstract compare(a: number, b: number): boolean;
  abstract swap(a: number, b: number): void;

  sort() {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
