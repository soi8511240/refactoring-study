/**
 * flag 인수 삭제하기
 */

// 예제 1
function setWidth(value){
  this._width = value;
}
function setHeight(value){
  this._heighth = value;
}

// 예제 2
class Concert {
  regularBook(customer){}
  premiumBook(customer){}

  /**
   * public에서는 개별로 분리해주고, 
   * private에서 정 사용해야한다면 쓰는정도..
   */
  #book(customer, isPremium) {}
}

// 예제 3
/**
 * 매개변수는 없는것이 제일 좋은 함수이다.
 */
function switchOn();
function switchOff();
