/**
 * 함수 매개화 변수하기.
 * @param {*} person
 */

// 예제 1
function raise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}

console.log(baseCharge(1))
console.log(baseCharge(101))
console.log(baseCharge(201))