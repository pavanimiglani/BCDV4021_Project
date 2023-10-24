import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import "./CSS/TransferPage.css"


const TransferPage = ({ user, updateTransactionsHistory, updateWalletAmount, RemainingValue} ) => {
    const { address } = useParams();
    const [inputValue, setInputValue] = useState('');
    const [showReceipt, setShowReceipt] = useState(false);
    const [showHash, setHash] = useState();
    const [showBlockHash, setBlockHash] = useState();
    const [showBlockNumber, setBlockNumber] = useState(1);
    const [showGasFee, setGasFee] = useState('21000');
    const handleSubmit = (e) => {
        e.preventDefault();
        setHash(Base64.stringify(sha256(user.address + address+inputValue)));
        const hash = Base64.stringify(sha256(user.address + address+inputValue));
        setBlockHash(Base64.stringify(sha256(inputValue)));
        if (inputValue.trim() !== '') {     //Check whether the input is empty!
            if(inputValue<=RemainingValue){
                setBlockNumber(showBlockNumber+1);
                setShowReceipt(true);
                const newTransaction = {
                    TransactionHash: hash, // Generate a unique hash for the new transaction
                    Status: 'Success', // Update this based on the actual result
                    Timestamp: new Date().toLocaleString(), // Current timestamp
                    From: user.address,
                    To: address,
                    Value: inputValue,
                    GasUse: '21000', // Update this based on the actual gas usage
                };        
                updateTransactionsHistory(newTransaction);
                updateWalletAmount(inputValue);
            }else{
                setShowReceipt(false);
                alert("Transfer Fail, not enough fund!")
                const newTransaction = {
                    TransactionHash: hash, // Generate a unique hash for the new transaction
                    Status: 'Fail', // Update this based on the actual result
                    Timestamp: new Date().toLocaleString(), // Current timestamp
                    From: user.address,
                    To: address,
                    Value: inputValue,
                    GasUse: '21000', // Update this based on the actual gas usage
                };        
                updateTransactionsHistory(newTransaction);
            }
        } else{
            alert("Please input a value!");
        }
    };

    return (
        <div className="transfer-container">
          <h1>Transfer</h1>
          <div className="from-to-details">
            <p>From: {user.address}</p>
            <p>To: {address}</p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Amount: </label>
              <input
                type="number"
                placeholder="Enter Amount..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="zoom" type="submit">Submit</button>
            </form>
          </div>
    
          {showReceipt && (
            <div className="receipt">
              <h1>Receipt</h1>
              <p>Transaction Hash: {showHash}</p>
              <p>Block Hash: {showBlockHash}</p>
              <p>Block number: {showBlockNumber}</p>
              <p>From: {user.address}</p>
              <p>To: {address}</p>
              <p>Gas Used: {showGasFee}</p>
            </div>
          )}
        </div>
      );
    };
  

export default TransferPage;