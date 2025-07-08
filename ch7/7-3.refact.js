export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return Priority.higherThan('normal');
  }
}

class Priority {
  #value;
  constructor(value) {
    /**
     * final클레스가 아닌 생성자 안에서 error를 던지는것은
     * 보안에 취약한걸로 알려져있음. */ 
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues.indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other){
    return this.index > other.index;
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;

console.log(highPriorityCount);
