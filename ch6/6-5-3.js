// const includeArraies = ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'];

// export function inNewEngland(aCustomer) {
//   return includeArraies.includes(aCustomer.address.state);
// }

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
