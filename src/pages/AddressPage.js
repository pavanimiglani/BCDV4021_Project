import React from 'react';
import { Link } from 'react-router-dom';

const mockAddresses = ["aaa", "bbb", "ccc"];

function AddressPage() {
  return (
    <div>
      <h2>Address List</h2>
      <ul>
        {mockAddresses.map((address, index) => (
          <li key={index}>
            <Link to={`/address/${address}`}>{address}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default AddressPage;
