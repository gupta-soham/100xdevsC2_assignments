/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (categoryTotals[category]) 
      categoryTotals[category] += price; // If the category already exists, add the price to the total

    else 
      categoryTotals[category] = price; // If the category does not exist, initialize it with the current price

  });
  
  const result = [];
  for (const category in categoryTotals) {
    result.push({ [category]: categoryTotals[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

// Testing
// const transactions = [
//   { itemName: 'Item1', category: 'Groceries', price: 50 },
//   { itemName: 'Item2', category: 'Electronics', price: 200 },
//   { itemName: 'Item3', category: 'Stationary', price: 30 }
// ];
// console.log(calculateTotalSpentByCategory(transactions));