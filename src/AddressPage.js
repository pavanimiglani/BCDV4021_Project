import React from 'react';

const mockAddresses = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']; // Replace with your actual address data

function AddressPage({ onTransferClick }) {
  return (
    <div>
      <h2>Address Page</h2>
      <ul>
        {mockAddresses.map((address, index) => (
          <li key={index}>
            <a href="#" onClick={() => onTransferClick(address)}>{address}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddressPage;
