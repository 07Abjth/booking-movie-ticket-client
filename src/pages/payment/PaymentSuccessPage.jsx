import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/user/user-homepage');
        }, 5000); // Redirect after 5 seconds

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [navigate]);

    return (
        <div className="payment-success-container">
            <h1>Payment Successful</h1>
            <p>Thank you for your purchase! You will be redirected shortly.</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};