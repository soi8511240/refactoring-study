export class Customer {
  #name;
  #contract;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(dateToday(), discountRate);
  }

  get becomePreferred() {
    return this.#contract.becomePreferred += 0.03;
    // 다른 코드들이 있음...
  }

  /**
   * 할인율을 적용한 가격계산
   * @param {*} amount 총합
   * @returns 
   */
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#contract.discountRate));
  }

}

/**
 * 오늘날짜 계산?
 * @returns 
 */
function dateToday() {
  return new Date();
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }
  
  /**
   * 할인율 계산
   */
  get discountRate() {
    return this.#discountRate;
  }

  /**
   * 우대고객 계산
   */
  get becomePreferred() {
    return this.#discountRate += 0.03;
  }
  
  set becomePreferred(value) {
    this.#discountRate = value;
    // 다른 코드들이 있음...
  }

}
