class Person {
  #name;
  #telephoneNumber;
  constructor(name, telephoneNumber) {
    this.#name = name;
    this.#telephoneNumber = telephoneNumber;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  
  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  get telephoneNumber(){
    return this.#telephoneNumber.toString;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
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

  get toString(){
    return `(${this.areaCode}) ${this.number}`; 
  }
}

const telephoneNumber = new TelephoneNumber("010", "12345678");
const person = new Person("엘리", telephoneNumber);
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);

console.log(telephoeNumber.toString)
