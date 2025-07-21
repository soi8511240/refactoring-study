/**
 * 특이 케이스 추가하기. 
 * Null 객체 패턴
 * 값이 비어있다면 Null을 사용하기보다 
 * Null을 나타낼수있는 Null,unknown 등 대표할수있는 객체를 만들어서 처리하면좋다.
 */

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this.customer);
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "occupant";
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    76;
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;

  return customerName;
}
