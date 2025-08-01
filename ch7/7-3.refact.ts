export class Order {
  constructor(public priority: Priority) {}
}

class Priority {
  static LOW = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);

  private constructor(private name: string, private index: number) {}

  toString(): string {
    return this.name;
  }

  equals(other: Priority) {
    return this.index === other.index;
  }

  higherThan(other: Priority) {
    return this.index > other.index;
  }
}

const orders = [
  new Order(Priority.LOW),
  new Order(Priority.NORMAL),
  new Order(Priority.RUSH),
];

const highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(Priority.NORMAL)
).length;

console.log(highPriorityCount);
