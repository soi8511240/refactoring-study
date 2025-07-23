/**
 * 객체 통쨰로 넘기기
 * 객체를 통째로 넘겨받는게 편의성이 높아지기는하나,
 * 다른 객체와 불필요한 커플링이 생길 수 있으며,
 * 의존성이 생길수 있어, 객체간의 관계를 더 확인하여야한다.
 */
export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange({low, high}) {
    return (
      low >= this._temperatureRange.low && high <= this._temperatureRange.high
    );
  }
}
