import React from 'react';

const WalletDetails = ({ walletData, RemainingValue }) => {
  return (
    <div className="wallet-details">
      <h2>Wallet Details</h2>
      <p>Account Name: {walletData.address}</p>
      <p>Balance: {RemainingValue}</p>
    </div>
  );
};

export default WalletDetails;