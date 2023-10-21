import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage";
import AddressPage from "./pages/AddressPage";
import Layout from "./pages/Layout";
import TransferPage from "./pages/TransferPage"
import WalletPage from "./pages/WalletPage" 

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

export default function App() {
  const user = {
    address: 'xxx',
    amount: 10,
  };
  const [TransactionsHistory, setTransactions] = useState([
    { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From: '', To: 'zyx', Value: '10', GasUse: '21000' },
    { TransactionHash: 'xxx', Status: 'xxx', Timestamp: 'xxx', From: '', To: 'mwm', Value: '20', GasUse: '20000' },
    // Add more transaction data as needed
  ]);

  const updateTransactionsHistory = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TransactionPage TransactionsHistory={TransactionsHistory} />} />
          <Route path="AddressPage" element={<AddressPage />} />
          <Route path="/address/:address" element={<TransferPage user={user} updateTransactionsHistory={updateTransactionsHistory}/>} />
          <Route path="Wallet" element={<WalletPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
