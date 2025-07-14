// const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }

// 클래스로
export class Reading {
  #quantity;
  #month;
  #year;
  #customer;

  constructor(params) {
    this.#customer = params.customer;
    this.#quantity = params.quantity;
    this.#month = params.month;
    this.#year = params.year;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.#year;
  }

  get quantity() {
    return this.#quantity;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.#quantity;
  }

  get basicChargeAmount() {
    return this.baseRate * this.#quantity;
  }

  get taxableCharge() {
    return this.baseRate * this.#quantity - 0.1;
  }
}

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export const acquireReading = new Reading(reading);
