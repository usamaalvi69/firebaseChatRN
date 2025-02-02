export const graphData = [0, '2k', '4k', '6k'].reverse();
export const months = ['Jan', 'Feb', 'Mar'];
export const graphNumbers = Array.from(
  {length: 1000 / 200 + 1},
  (_, i) => i * 200,
).reverse();

export const statsData = [
  {id: 1, label: 'Income', bal: '1,280', percenatge: '15%'},
  {id: 2, label: 'Expenses', bal: '147.56', percenatge: '10%'},
  {id: 3, label: 'Taxes', bal: '91.42', percenatge: '20%'},
  {id: 4, label: 'Invoices', bal: '30', percenatge: '20%'},
];
