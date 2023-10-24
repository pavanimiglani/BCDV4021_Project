import ReactDOM from "react-dom/client";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage";
import AddressPage from "./pages/AddressPage";
import Layout from "./pages/Layout";
import TransferPage from "./pages/TransferPage"
import WalletPage from "./pages/WalletPage"
import LoginPage from "./pages/LoginPage";
import WalletDetails from "./pages/WalletDetails";
import './App.css';

export default function App() {
  const buttonStyle = {
    position: 'fixed',
    top: '10px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const user = {
    address: '0xD06284664319742513E2244e5149f93B0914B409',
    amount: 10,
  };

  const [walletRemaining, setwalletRemaining] = useState(10);
  const [TransactionsHistory, setTransactions] = useState([
    { TransactionHash: '0x2446f1fd773fbb9f080e67db8765678shgajhe987413cf28a2a4a6da9bh87d6a', Status: 'Success', Timestamp: '2023-09-23T04:0803.172Z', From: '0xD06284664319742513E2244e5149f93B0914B409', To: '0x1342342d53F17d6df2426029cDC7d41e34123423', Value: '10', GasUse: '21000' },
    { TransactionHash: '0x28h866ffd783ffb9f080u6shik8g6a03c7ed7427c9c9413cf28a2a4a6da9b56c', Status: 'Success', Timestamp: '2023-09-29T04:2307.172Z', From: '0xD06284664319742513E2244e5149f93B0914B409', To: '0x736514Db74DbF23e901A60DAEbaE97f8e9b09873', Value: '20', GasUse: '20000' },
    // Add more transaction data as needed
  ]);

  const updateTransactionsHistory = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };
  const updateWalletAmount = (used) =>{
    setwalletRemaining(walletRemaining-used)
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <button onClick={handleLogout} style={buttonStyle}>Log Out</button>}
      <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<TransactionPage TransactionsHistory={TransactionsHistory} />} />
          <Route path="AddressPage" element={<AddressPage />} />
          <Route path="/address/:address" element={<TransferPage user={user} updateTransactionsHistory={updateTransactionsHistory} updateWalletAmount={updateWalletAmount} RemainingValue = {walletRemaining}/>} />
          <Route path="Wallet" element={<WalletDetails walletData={user} RemainingValue = {walletRemaining}/>} />
        </Route>
        ) : (
          <Route index element={<LoginPage onLogin={handleLogin} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);