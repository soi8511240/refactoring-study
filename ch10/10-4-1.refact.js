/**
 * 특정한 객체 타입에 따라 로직이 실행되야 하는상황이라면,
 * 그 객체를 클로스로 만들어서 다형성을 이용해보자.
 */

export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.AfricanSwallow]));
}

class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name(){
    return this.#name;
  }
  get plumage() {
    return 'unknown';
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }

  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([new EuropeanSwallow(), new AfricanSwallow(), new NorwegianBlueParrot()]);
console.log('result', result);
