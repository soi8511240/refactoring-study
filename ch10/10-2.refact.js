/**
 * 조건식 통합하기.
 * 동일한 동작을 동작하는 다양한 조건들이 있다면
 * 그 조건들을 하나의 조건으로 뭉친다음에
 * 그에 앎맞는 이름(의도)를 정해주자.
 */

function disabilityAmount(employee) {
    if (isNotEligibleForDisability) return 0;
    return 1;
}

function isNotEligibleForDisability(employee) {
    return (
        employee.seniority < 2 ||
        employee.monthsDisabled > 12 ||
        employee.isPartTime
    )
}