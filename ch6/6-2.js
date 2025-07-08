// 예제 1
// export function rating(driver) {
//   return moreThanFiveLateDeliveries(driver) ? 2 : 1;
// }

// function moreThanFiveLateDeliveries(driver) {
//   return driver.numberOfLateDeliveries > 5;
// }

export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}
