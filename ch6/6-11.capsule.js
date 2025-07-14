export class PriceOrder {
  #basePrice;
  #discount;
  #quantity;
  #shipping;

  constructor(productOrder, shipping) {
    this.#basePrice = productOrder.basePrice;
    this.#discount = productOrder.discount;
    this.#shipping = shipping.shippingCost;
    this.#quantity = productOrder.quantity;
  }

  get price() {
    return this.#basePrice - this.#discount + this.#shipping;
  }
}
export class ProductOrder {
  #basePrice;
  #discountRate;
  #discountThreshold;
  quantity;
  constructor(product, quantity) {
    this.#basePrice = product.basePrice;
    this.#discountRate = product.discountRate;
    this.#discountThreshold = product.discountThreshold;
    this.quantity = quantity;
  }

  get basePrice() {
    return this.#basePrice * this.quantity;
  }

  get discount() {
    return (
      Math.max(this.quantity - this.#discountThreshold, 0) *
      this.#basePrice *
      this.#discountRate
    );
  }
}

export class Shipping {

  #basePrice;
  #quantity;

  #discountThreshold;
  #discountedFee;
  #feePerCase;

  constructor(productOrder, quantity, shippingMethod) {
    this.#basePrice = productOrder.basePrice;
    this.#quantity = quantity;
    this.#discountThreshold = shippingMethod.discountThreshold
    this.#discountedFee = shippingMethod.discountedFee
    this.#feePerCase = shippingMethod.feePerCase
  }

  get shippingPerCase() {
    return this.#basePrice > this.#discountThreshold
      ? this.#discountedFee
      : this.#feePerCase;
  }

  get shippingCost() {
    return quantity * this.shippingPerCase;
  }
}

// // 사용 예:
// const product = {
//   basePrice: 10,
//   discountRate: 0.1,
//   discountThreshold: 10,
// };

// const shippingMethod = {
//   discountThreshold: 20,
//   feePerCase: 5,
//   discountedFee: 3,
// };

// const price = priceOrder(product, 5, shippingMethod);
// console.log(price); //65
