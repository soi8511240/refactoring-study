export class Order {
  #product;
  #quantity;
  #shipping;
  constructor(product, quantity, shippingMethod) {
    this.#product = product;
    this.#quantity = quantity;
    this.#shipping = shippingMethod;
  }

  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  get discount() {
    return (
      Math.max(this.#quantity - this.#product.discountThreshold, 0) *
      this.#product.basePrice *
      this.#product.discountRate
    );
  }
  get shippingPerCase() {
    return this.basePrice > this.#shipping.discountThreshold
      ? this.#shipping.discountedFee
      : this.#shipping.feePerCase;
  }
  get shippingCost() {
    return this.#quantity * this.shippingPerCase;
  }
  get price() {
    return this.basePrice - this.discount + this.shippingCost;
  }
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const order = new Order(product, 5, shippingMethod);
console.log(order.price); //65
