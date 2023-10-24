import React from 'react';
import './WalletDetails.css'; 

const WalletDetails = ({ walletData }) => {
  return (
    <div className="wallet-details">
      <h2>Wallet Details</h2>
      <p>Account Name: {walletData.accountName}</p>
      <p>Balance: {walletData.balance}</p>
      <p>Transactions: {walletData.transactions}</p>
    </div>
  );
};

export default WalletDetails; 


