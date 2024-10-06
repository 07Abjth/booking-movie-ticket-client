import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { fetchPaymentData } from '../../services/paymentApi.js'; // Adjust the import path accordingly

// PaymentPage component
export const PaymentPage = () => {
    const location = useLocation(); // Use useLocation to access the state
    const { selectedSeats, movieDetails, theaterDetails, showTime, totalAmount } = location.state || {};

    const [paymentData, setPaymentData] = useState({
        key: '', // PayU Merchant Key will be populated from the backend
        txnid: Date.now(), // Use a unique transaction ID
        amount: totalAmount.toFixed(2), // Ensure amount is formatted to two decimal places
        productinfo: `${movieDetails.title} - ${theaterDetails.name} - Seats: ${selectedSeats.join(', ')}`, // Concatenate order details
        firstname: 'John Doe', // Replace with the user's actual name
        email: 'john@example.com', // Replace with the user's actual email
        phone: '1234567890', // Replace with the user's actual phone
        surl: 'https://your-success-url.com', // Success URL
        furl: 'https://your-failure-url.com', // Failure URL
        hash: '', // PayU-generated hash
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch payment data including the key and hash
                const data = await fetchPaymentData({
                    transactionId: paymentData.txnid, // Unique transaction ID
                    amount: paymentData.amount,
                    productInfo: paymentData.productinfo,
                    firstname: paymentData.firstname,
                    email: paymentData.email,
                    phone: paymentData.phone,
                });

                if (data) {
                    console.log("Payment data from backend:", data); // Debug log
                    setPaymentData(prev => ({
                        ...prev,
                        key: data.key, // Set the key from the response
                        hash: data.hash, // Set the generated hash from the response
                    }));
                }
            } catch (err) {
                console.error("Error generating hash:", err);
            }
        };

        fetchData();
    }, [paymentData.amount, paymentData.productinfo, paymentData.firstname, paymentData.email, paymentData.phone]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the amount
        if (!paymentData.amount || isNaN(paymentData.amount) || Number(paymentData.amount) <= 0) {
            alert("Invalid amount. Please enter a valid amount.");
            return;
        }

        console.log("Submitting payment with amount:", paymentData.amount); // Debugging log

        const form = document.forms.payuForm;
        form.submit();
    };

    return (
        <form id="payuForm" method="POST" action="https://secure.payu.in/_payment">
            <input type="hidden" name="key" value={paymentData.key} />
            <input type="hidden" name="txnid" value={paymentData.txnid} />
            <input type="hidden" name="amount" value={paymentData.amount} />
            <input type="hidden" name="productinfo" value={paymentData.productinfo} />
            <input type="hidden" name="firstname" value={paymentData.firstname} />
            <input type="hidden" name="email" value={paymentData.email} />
            <input type="hidden" name="phone" value={paymentData.phone} />
            <input type="hidden" name="surl" value={paymentData.surl} />
            <input type="hidden" name="furl" value={paymentData.furl} />
            <input type="hidden" name="hash" value={paymentData.hash} />
            
            <button type="submit" onClick={handleSubmit}>
                Pay with PayU
            </button>
        </form>
    );
};
