import { Order } from "./6-11.functional.js";

describe("Order", () => {
  let order;

  let product;
  let shippingMethod;

  beforeEach(() => {
    product = {
      basePrice: 10,
      discountRate: 0.1,
      discountThreshold: 10,
    };

    shippingMethod = {
      discountThreshold: 20,
      feePerCase: 5,
      discountedFee: 3,
    };
    order = new Order(product, 5, shippingMethod);
  });

  it("basePrice", () => {
    expect(order.basePrice).toBe(50);
  });

  it("discount", () => {
    expect(order.discount).toBe(0);
  });

  it("shippingPerCase", () => {
    expect(order.shippingPerCase).toBe(3);
  });

  it("shippingCost", () => {
    expect(order.shippingCost).toBe(15);
  });

  it("price", () => {
    expect(order.price).toBe(65);
  });
});
