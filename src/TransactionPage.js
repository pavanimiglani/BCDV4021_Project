import React from 'react';

const mockTransactions = [
  { source: 'xxx', destination: 'xxx', amount: 'xxx' },
  { source: 'YYY', destination: 'ZZZ', amount: '123' },
  // Add more transactions as needed
];

function TransactionPage() {
  return (
    <div>
      <h2>Transaction Page</h2>
      <ul>
        {mockTransactions.map((transaction, index) => (
          <li key={index}>
            Source: {transaction.source}, Destination: {transaction.destination}, Amount: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionPage;
