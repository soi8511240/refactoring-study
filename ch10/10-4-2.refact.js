/**
 * 다형성 이용하기
 */

class Rating {
  #voyage;
  #history;
  constructor(voyage, history) {
    this.#voyage = voyage;
    this.#history = history;
  }

  get voyage() {
    return this.#voyage;
  }
  get history() {
    return this.#history;
  }

  get value() {
    const profit = this.voyageProfitFactor; // 수익요인
    const risk = this.voyageRisk; // 항해 경로 위험요소
    const history = this.captainHistoryRisk; // 선장의 항해 이력 위험 요소
    return profit * 3 > risk + history * 2 ? "A" : "B";
  }

  get voyageProfitFactor() {
    // 수익 요인
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "east-indies") result += 1;
    result += this.voyageHistoryFactorAndLengthFactor;
    return result;
  }

  get voyageHistoryFactorAndLengthFactor() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  get voyageRisk() {
    // 항해 경로 위험요소
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    // 선장의 항해 이력 위험 요소
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get hasChina() {
    return this.history.some((v) => "china" === v.zone);
  }
}

class ExperienceChanaRating extends Rating {
  get voyageHistoryFactorAndLengthFactor() {
    let result = 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
}

export function rating(voyage, history) {
  if (voyage.zone === "china" && history.some((v) => "china" === v.zone)){
    return new ExperienceChanaRating(voyage, history).value;
  }
  return new Rating(voyage, history).value;
}

const voyage = { zone: "west-indies", length: 10 };
const history = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const rate = rating(voyage, history);
console.log(rate);
