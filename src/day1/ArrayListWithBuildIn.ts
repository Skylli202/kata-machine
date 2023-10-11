// this JavaScript Array prototype, capacity is useless
// I know.
// But I found interesting to manipulate build-in array method,
// as well as JavaScript spread operator.
export default class ArrayList<T> {
  public length: number;
  public capacity: number;
  public array: T[];

  constructor(capacity: number) {
    this.length = 0;
    this.capacity = capacity;
    this.array = new Array(this.capacity);
  }

  prepend(item: T): void {
    // this.insertAt(item, 0);
    this.length++;
    this.array = [item, ...this.array];
  }

  insertAt(item: T, idx: number): void {
    this.array = [
      ...this.array.slice(0, idx),
      item,
      ...this.array.slice(idx + 1),
    ];
    this.length++;
  }

  append(item: T): void {
    this.insertAt(item, this.length);
  }

  remove(item: T): T | undefined {
    return this.removeAt(this.array.findIndex((v) => v === item));
  }

  get(idx: number): T | undefined {
    return this.array[idx];
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    const item = this.array[idx];
    this.array = [...this.array.slice(0, idx), ...this.array.slice(idx + 1)];
    this.length--;

    return item;
  }
}
