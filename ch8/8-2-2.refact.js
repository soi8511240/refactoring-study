/**
 * Account 클래스가 중계?
 */

class Account {
  constructor(accountType) {
    this._account = accountType;
  }

  get interestRate() {
    return this._account.interestRate;
  }
}

class AccountType {
  #name;
  #number;
  #type;
  #interestRate;
  constructor(nameString, number, type, interestRate) {
    this.#name = nameString;
    this.#number = number;
    this.#type = type;
    this.#interestRate = interestRate;
  }

  /**
   * getter, setter
   */
  toObject() {
    return {
      nameString: this.#name,
      number: this.#number,
      type: this.#type,
      interestRate: this.#interestRate,
    };
  }
}
