// const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// export function acquireReading() {
//   return reading;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }

import _ from "lodash";
// 변환함수로
const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

/**
 * rawReading - 날것의 객체
 * enrichFunction - 필요한 것이 추가된 객체
 * @param {*} original rawReading
 * @returns
 */
export function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(original) * original.quantity;
  result.texableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );

  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

function taxThreshold(year) {
  return 0.1;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
