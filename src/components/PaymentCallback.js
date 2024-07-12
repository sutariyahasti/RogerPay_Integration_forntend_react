// src/components/PaymentCallback.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentCallback = () => {
    const location = useLocation();

    useEffect(() => {
        // Parse the query parameters or response from RogerPay
        const queryParams = new URLSearchParams(location.search);
        const paymentStatus = queryParams.get('status');

        // Update payment status in your app
        console.log('Payment Status:', paymentStatus);
    }, [location]);

    return (
        <div>
            <h2>Payment Callback</h2>
            <p>Handling payment response...</p>
        </div>
    );
};

export default PaymentCallback;
