// lorem.ipsum(dolor.sitAmet);
// consectetur(adipiscing).elit();
// sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
// ut.enim.ad(minim.veniam);

export function payAmount(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
  else {
    return someFinalComputation();
  }
}

function someFinalComputation() {
  return { amount: 999, reasonCode: "UNICORN" };
}
