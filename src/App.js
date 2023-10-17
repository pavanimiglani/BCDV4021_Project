import React, { useState } from 'react';
import TransactionPage from './TransactionPage';
import AddressPage from './AddressPage';
import TransferPage from './TransferPage';

function App() {
  const [activeTab, setActiveTab] = useState('Transaction');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [userAddress, setuserAddress] = useState("xyz");


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedAddress(null); // Reset selected address when switching tabs
  };

  const handleAddressClick = (address) => {
    setActiveTab('Transfer'); // Set the active tab to "Transfer"
    setSelectedAddress(address); // Store the selected address
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li onClick={() => handleTabClick('Transaction')} className={activeTab === 'Transaction' ? 'active' : ''}>
              Transaction
            </li>
            <li onClick={() => handleTabClick('Address')} className={activeTab === 'Address' ? 'active' : ''}>
              Address
            </li>
            <li onClick={() => handleTabClick('Wallet')} className={activeTab === 'Wallet' ? 'active' : ''}>
              Wallet
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeTab === 'Transaction' && <TransactionPage />}
        {activeTab === 'Address' && <AddressPage onTransferClick={handleAddressClick} />}
        {activeTab === 'Transfer' && <TransferPage mainuser={userAddress} selectedAddress={selectedAddress} />}
        {/* Add handling for other tabs (Wallet) here */}
      </main>
    </div>
  );
}

export default App;
