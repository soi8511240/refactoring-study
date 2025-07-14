// export function isDeliveryFree(order) {
//   return order.basePrice > 1000;
// }

export function isDeliveryFree({ basePrice }) {
  return basePrice > 1000;
}
