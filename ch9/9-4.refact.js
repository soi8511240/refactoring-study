/**
 * 값, 참조 특징
 *
 * 값, value, 원시 - 불변 a=1;
 * 참조, reference - 가변 let {} *위험성 - 외부에서 클래스내에 객체를 직접 접근해서 수정할 여지가 생김.
 */

/**
 * constructor에서 만든 TelephoneNumber클래스 객체를 참조하여 setter에서 직접 변경하는것이 아니라
 * setter에서 변경이 일어날때 마다 TelephoneNumber클래스 객체를 새로 생성하여 저장함.
 * getter에서는 해당하는 값만 반환함.
 * 이렇게 하면 내부객체를 직접 접근하려고 한다면 Crash가 생기기때문에 가드가 가능함.
 * 
 * 최적화의 부분은 신경 안쓰도록.
 */

class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    this.#telephoneNumber = new TelephoneNumber(this.officeNumber, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
