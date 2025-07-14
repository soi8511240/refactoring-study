/**
 * 조건문 분해하기
 */

const chargeCalculator = new ChargeCalculator();

function calculateCharge(date, quantity, plan) {
    return chargeCalculator.calculateCharge();
}

class ChargeCalculator {
    #isSummer;

    constructor(date, quantity, plan) {
        this.date = date;
        this.quantity = quantity;
        this.plan = plan;
    }

    get isSummer() {
        return !this.date.isBefore(plan.summerStart) && !this.date.isAfter(plan.summerEnd);
    }

    get summerCharge() {
        return this.quantity * this.plan.summerRate;
    }

    get regularCharge() {
        return this.quantity * this.plan.regularRate + this.plan.regularServiceCharge
    }

    get calculateCharge() {
        return this.isSummer ? this.summerCharge : this.regularCharge;
    }

}