export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course extends Person {
  #isAdvanced;
  constructor(isAdvanced) {
    super();
    this.#isAdvanced = isAdvanced;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
ellie.courses.push(new Course('리팩토링', true));
console.log(ellie.courses.length);
