// const someFilter = (reservedCustomer) => reservedCustomer.id === customer.id;

// export default class Book {
//   #reservations;
//   constructor() {
//     this.#reservations = [];
//   }

//   addReservation(customer) {
//     this.#reservations.push(customer);
//   }

//   hasReservation(customer) {
//     return this.#reservations.some(someFilter);
//   }
// }

const someFilter = (reservedCustomer) => reservedCustomer.id === customer.id;

export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer, isPriority = false) {
    // flag 로 처리하 것은 좋지않다.
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(someFilter);
  }
}
