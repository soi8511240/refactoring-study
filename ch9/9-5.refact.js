/**
 * 값을 참조로 바꾸기. 반대상황.
 * 객체끼리 업데이트 된 정보를 공유해야하는 상황.
 *
 */

const customerRepository = new CustomerRepository();
const order = new Order(data.number, customerRepository.registerCustomer(data.customerId))

/**
 * Order 는 repository 클래스의 종속성을 가지지않고 
 * 도메인에 관련된 로직만 처리하게된다.
 */
class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
    // new Customer(data.customerId); 에서 customerId는 고유한 키인데,
    // 고유한 키를 보장하기위해 레파지토리 패턴을 사용한다.
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  set name(value) {
    this._name = value;
  }
}

/**
 * 레파지토리 패턴.
 * 고객 인스턴스를 저장해놓고 관리하는 클래스.
 */
class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
