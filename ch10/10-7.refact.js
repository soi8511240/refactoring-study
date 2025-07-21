/**
 * boolean 은 왠만하면 쓰지말자.
 * for, while 은 break; continue;를 사용하자.
 */

for (const p of people) {
  if (p === "Don") {
    sendAlert();
    break;
  }
}
