// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentCallback from './components/PaymentCallback';
import Payment from './components/payment';
import Login from './components/Login';
import Shopnow from './components/Shopnow';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to RogerPay Integration</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/payment-callback" element={<PaymentCallback />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/shop" element={<Shopnow />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
