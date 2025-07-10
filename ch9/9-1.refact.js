/**
 * 변수 쪼개기 
 * 
 * 임시변수명을 쓰지말고, 의미있는 이름을 부여하자.
 * 
 * const를 기본으로 사용하고 (mutable)
 * 꼭 변해야 하는 변수일때만 let으로 선언하자 (immutable)
 */

// 예제 1
const temp = 2 * (height + width);
console.log(temp);
const squareMeter = height * width;
console.log(squareMeter);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
