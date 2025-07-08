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
    return [...this.#courses];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfABsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
        runIfABsent();
        return;
    }
    this.#courses.splice(index,1);
  }

  coursesSize() {
    return this.#courses.length;
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
const course = new Course('리팩토링', true)
ellie.addCourse(course);
console.log(ellie.coursesSize());
ellie.removeCourse(course);
ellie.removeCourse(course, ()=>{
    console.log('not found');
});
console.log(ellie.coursesSize());
