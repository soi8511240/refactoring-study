/**
 * 불변성과 변성
 *
 * set discount(value) 같이 변하는 값으로 값을 내보내야하는경우
 * 일일이 내부변수에 접근해서 다 바꿔주는것보다는
 * 질의형태로 바로 값을 계산하여 반환하는게 나을때가 있다.
 *
 */

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }

  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
