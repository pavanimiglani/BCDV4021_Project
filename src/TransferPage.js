import React, { useState } from 'react';
import './App.css';


function TransferPage ({userAddress, selectedAddress}){
    const [inputValue, setInputValue] = useState('');
    const [showReceipt, setShowReceipt] = useState(false);
    const [showHash, setHash] = useState('');
    const [showBlockHash, setBlockHash] = useState("");
    const [showBlockNumber, setBlockNumber] = useState(10);
    const [showGasFee, setGasFee] = useState('21000');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {     //Check whether the input is empty!
            setShowReceipt(true);
        } else{
            alert("Please input a value!");
        }
    };

    return (
        <div className="App">
        <h1>Transfer</h1>
        <div>
            <p>From: {userAddress}</p>
            <p>To: {selectedAddress}</p>
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
            <button className = "zoom" type="submit">Submit</button>
        </form>
        </div>

        {showReceipt && (           //when showReceipt is true --> show reciept
            <div className="receipt">
                <h1>Receipt</h1>
                <p>Transaction Hash: {showHash}</p>
                <p>Block Hash: {showBlockHash}</p>
                <p>Block number: {showBlockNumber}</p>
                <p>From: {userAddress}</p>
                <p>To: {selectedAddress}</p>
                <p>Gas Used: {showGasFee}</p>
            </div>
        )}
        </div>
    );
    }
  

export default TransferPage;
