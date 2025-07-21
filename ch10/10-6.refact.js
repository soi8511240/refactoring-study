/**
 * Assertion 추가하기
 * 조건에 맞지않을떄 crash를 일으키는 assert 처리를 해준다.
 * 허나 배포버전등에는 오류만 내주고 값을 초기화해주는등의 처리가 필요하다.
 */

import { strict as assert} from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0); 
    return this.discountRate ? number - this.discountRate * number : number;
  }
}
