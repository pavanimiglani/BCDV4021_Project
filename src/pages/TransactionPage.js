// TransactionPage.js
import React, { useState } from 'react';


const TransactionPage = ({TransactionsHistory}) => {
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
