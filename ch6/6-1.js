const displayText = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const calculateOutstanding = (orders) => {
  return orders.reduce((sum, order) => (sum += order.amount), 0);
};

const recordDueDate = () => {
  const today = new Date();
  const dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  return dueDate;
};

const displayDetails = ({ customer, dueDate }, outstanding) => {
  console.log(`name: ${customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${dueDate.toLocaleDateString()}`);
};

export function printOwing(invoice) {
  displayText();
  let outstanding = calculateOutstanding(invoice.orders);
  invoice.dueDate = recordDueDate();
  displayDetails(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
