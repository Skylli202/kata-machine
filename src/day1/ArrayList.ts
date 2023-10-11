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
    this.insertAt(item, 0);
  }

  insertAt(item: T, idx: number): void {
    const tmp = this.array;

    if (this.length + 1 === this.capacity) {
      this.capacity = this.capacity * 2;
    }
    this.array = new Array(this.capacity);

    for (let i = 0; i < idx; ++i) {
      this.array[i] = tmp[i];
    }

    this.array[idx] = item;

    for (let i = idx; i < this.length; ++i) {
      this.array[i + 1] = tmp[i];
    }

    this.length++;
  }

  append(item: T): void {
    // console.log(this.array, this.length, this.capacity);
    if (this.length + 1 === this.capacity) {
      this.capacity = this.capacity * 2;
      const tmp = this.array;
      this.array = new Array(this.capacity);
      for (let i = 0; i < tmp.length; ++i) {
        this.array[i] = tmp[i];
      }
    }
    this.array[this.length] = item;
    this.length++;
    // console.log(this.array, this.length, this.capacity);
  }

  remove(item: T): T | undefined {
    let foundAt: number | undefined = undefined;

    for (let i = 0; i < this.length; ++i) {
      if (this.array[i] === item) {
        foundAt = i;
        return this.removeAt(foundAt);
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx > this.length && idx < 0) {
      return undefined;
    }

    return this.array[idx];
  }

  removeAt(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }

    const item = this.array[idx];

    if (idx === this.length - 1) {
      this.length--;
      return item;
    }

    for (let i = idx; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.length--;
    return item;
  }
}
