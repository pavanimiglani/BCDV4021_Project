import React from 'react';

const TransactionsHistory = [
  { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From:'', To:'zyx', Value:'10', GasUse:'21000' },
  { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From:'', To:'mwm', Value:'20', GasUse:'20000'  },
  // Add more transactions as needed
];

function TransactionPage() {
  return (
    <div>
      <h2>Transaction Page</h2>
      <ul>
        {TransactionsHistory.map((transaction, index) => (
          <li key={index}>
            Transaction Hash: {transaction.TransactionHash} 
            Status: {transaction.Status}
            Timestamp: {transaction.Timestamp}
            From: {transaction.From}
            To: {transaction.To}
            Value: {transaction.Value}
            Gas Used: {transaction.GasUse}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionPage;
