/**
 * A 클래스가 지나치게 너무 많은 역활을 가지고있을때,
 * A 클래스 내부에 B클래스를 컴포지션하여 역활을 분리함.
 * 
 * 반대의 경우 너무 적은 역활을 
 * 내부 클래스로 역활을 분리되어 있을땐 오히려 합치는게 좋다.
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

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
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
console.log(person.department.manager);
console.log(person.department.chargeCode);
