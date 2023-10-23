import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/AddressPage.css'; // Import the CSS file

const mockAddresses = ["0x09876543176b99515fBD8451efa5a7d26bbF65d2", "0x133C27Fa25Ab96dF66617dc61F53Ff4Be9839286", "0xaBCc14e88E11EcEc78b00657a13E023BD899e7ea"];

function AddressPage() {
  return (
    <div className="address-list"> {/* Apply the 'address-list' class */}
      <h2>Address List</h2>
      <ul>
        <li className="address-link"> User: 0xD06284664319742513E2244e5149f93B0914B409</li>
        {mockAddresses.map((address, index) => (
          <li key={index}>
            <Link to={`/address/${address}`} className="address-link"> {/* Apply the 'address-link' class */}
              {address}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddressPage;
