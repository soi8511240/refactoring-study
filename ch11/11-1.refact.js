/**
 * 질의 함수와 변경 함수 분리하기.
 * 목표 : side Effect 없는 함수 만들기
 * 예) 계산함수인데 db에 업데이트까지 진행하는함수 등.
 * */

// 예제 1
function totalOutstanding() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  return result;
}

function sendBill() {
  //bill 을 보냄
  sendBill();
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);

  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }

}
function findMiscreant(people) {
  
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';

}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
