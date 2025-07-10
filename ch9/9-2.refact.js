/**
 * 클레스,객체 내의 private field와 
 * 외부에서 사용하는 getter, setter 다를수있으며,
 * 의미가 더욱 중요하다.
 */

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}

const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});
