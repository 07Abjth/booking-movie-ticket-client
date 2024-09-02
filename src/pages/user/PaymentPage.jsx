import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle payment submission
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Replace this with actual payment API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // If payment is successful
      toast.success('Payment successful!');
      navigate('/confirmation'); // Redirect to a confirmation page
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">Payment</h1>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-lg font-medium mb-1">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate" className="block text-lg font-medium mb-1">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-lg font-medium mb-1">CVV</label>
          <input
            type="text"
            id="cvv"
            value={paymentDetails.cvv}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
            className="w-full p-2 border rounded"
            placeholder="123"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};
