// TransactionPage.js
import React, { useState } from 'react';
import './CSS/TransactionPage.css';


const TransactionPage = ({TransactionsHistory}) => {
  return (
    <div className="transaction-history"> {/* Apply the 'transaction-history' class */}
      <h2>Transaction History</h2>
      <ul className="transaction-list"> {/* Apply the 'transaction-list' class */}
        {TransactionsHistory.map((transaction, index) => (
          <li key={index}>
            <p><strong>TransactionHash:</strong> {transaction.TransactionHash}</p>
            <p><strong>Status:</strong> {transaction.Status}</p>
            <p><strong>Timestamp:</strong> {transaction.Timestamp}</p>
            <p><strong>From:</strong> {transaction.From}</p>
            <p><strong>To:</strong> {transaction.To}</p>
            <p><strong>Value:</strong> {transaction.Value}</p>
            <p><strong>Gas Use:</strong> {transaction.GasUse}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionPage;
