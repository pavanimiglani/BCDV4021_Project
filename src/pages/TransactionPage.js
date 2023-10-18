// TransactionPage.js
import React from 'react';

const TransactionsHistory = [
  { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From: '', To: 'zyx', Value: '10', GasUse: '21000' },
  { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From: '', To: 'mwm', Value: '20', GasUse: '20000' },
  // Add more transaction data as needed
];

const TransactionPage = () => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {TransactionsHistory.map((transaction, index) => (
          <li key={index}>
            TransactionHash: {transaction.TransactionHash}<br />
            Status: {transaction.Status}<br />
            Timestamp: {transaction.Timestamp}<br />
            From: {transaction.From}<br />
            To: {transaction.To}<br />
            Value: {transaction.Value}<br />
            Gas Use: {transaction.GasUse}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionPage;
