// let defaultOwner = { firstName: '마틴', lastName: '파울러' };

// export function getDefaultOwner() {
//   return defaultOwner;
// }

let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export class Person {
  #firstName;
  #lastName;
  constructor(owner) {
    this.#firstName = owner.firstName;
    this.#lastName = owner.lastName;
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
}

export function getDefaultOwner() {
  return new Person(defaultOwner);
}
