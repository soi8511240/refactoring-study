// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);

import _ from 'lodash';

class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
    this.#data = data;
  }

  get name() {
    return this.#name;
  }
//   set name(value) {
//     this.#name = value;
//   }
  get country() {
    return this.#country;
  }
//   set country(value) {
//     this.#country = value;
//   }

  get rawData(){
    return _.cloneDeep(this.#data) // 얉은복사, cloneDeep 
    // setter가 없고 캡슐화된 객체가 불변해야한다면 객체를 복사생성해서 주고,
    // setter가 있고 캡슐화된 객체가 변하며 변한 값을 리턴해줄때는 {name: this.name , country: this.country}
  }
}

const organization = new Organization("Acme Gooseberries", "GB");

// organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
