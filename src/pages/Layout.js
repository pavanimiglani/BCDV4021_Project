import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Transaction History</Link>
          </li>
          <li>
            <Link to="/AddressPage">Address</Link>
          </li>
          <li>
            <Link to="/Wallet">Wallet</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;