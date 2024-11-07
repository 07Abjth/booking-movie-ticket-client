
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PaymentCancelPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const timer = setTimeout(() => {
          navigate('/');
      }, 5000); // Redirect after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [navigate]);

  return (
      <div className="payment-cancel-container">
          <h1>Payment Canceled</h1>
          <p>Your payment was canceled. You will be redirected shortly.</p>
          <button onClick={() => navigate('/user/user-homepage')}>Go to Home</button>
      </div>
  );
};