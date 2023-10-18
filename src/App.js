import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionPage from "./pages/TransactionPage";
import AddressPage from "./pages/AddressPage";
import Layout from "./pages/Layout";
import TransferPage from "./pages/TransferPage"

export default function App() {
  const user = {
    address: 'xxx',
    amount: 10,
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TransactionPage />} />
          <Route path="AddressPage" element={<AddressPage />} />
          <Route path="/address/:address" element={<TransferPage user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);