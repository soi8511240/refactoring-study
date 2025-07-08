/**
 * 관련없는 작업을 하나의 반복문에서 처리하면 좋지 않다.
 * 
 * 반복문 분리하여 
 * 배열 api를 이용하여 리팩토링
 */

export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduct((total, p) => {
      total += p.salary;
    }, 0);
  }
}
