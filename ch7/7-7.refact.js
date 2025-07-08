/**
 * 내부적으로 사용하는 정보(department 의 구조)를 지나치게 외부로 노출하는 부분이있음.
 * 사용하는 입장에서는 내부구조를 알필요가 없이, output만이 중요하기에..
 */

class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }
  set department(arg) {
    this.#department = arg;
  }

  get manager(){
    return this.#department.manager
  }

  get chargeCode(){
    return this.#department.chargeCode
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}
// 하나로 합치는게 나은게..?
const person = new Person('Tom', new Department('aManager', '999'));

console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
