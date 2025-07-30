import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axiosInstance';

export const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sessionId = new URLSearchParams(location.search).get('session_id');

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!sessionId) {
        setError("No session ID found.");
        return;
      }

      setLoading(true);
      try {
        const response = await axiosInstance.get(`/payment/session-status/${sessionId}`);
        console.log(" Booking API response:", response.data);
        if (response.data.success) {
          setBooking(response.data.booking);
        } else {
          setError("Failed to verify payment or booking.");
        }
      } catch (err) {
        console.error("❌ Error fetching booking:", err);
        setError("Something went wrong while fetching payment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();

    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [sessionId, navigate]);

  const formatAmount = (value) => {
    if (value === undefined || value === null) return '0.00';
    const parsed = parseFloat(value);
    return !isNaN(parsed) ? parsed.toFixed(2) : '0.00';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="flex items-center space-x-4">
          <span className="loading loading-bars loading-lg text-primary"></span>
          <p className="text-lg text-gray-700 font-medium">Confirming your booking...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100">
        <div className="card w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 border border-red-200">
          <div className="card-body items-center text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-2">❌ Booking Failed</h2>
            <p className="text-gray-700">{error}</p>
            <div className="card-actions mt-6">
              <button
                onClick={() => navigate('/movies')}
                className="btn btn-outline btn-error px-6 py-2 rounded-xl"
              >
                Back to Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <div className="card w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
        <div className="card-body items-center text-center space-y-4">
          <h2 className="text-4xl font-bold text-green-600 mb-2">🎉 Booking Successful!</h2>
          <p className="text-gray-700 text-lg">Thank you! Your seats have been reserved successfully.</p>

          <div className="w-full text-left space-y-2 text-gray-800 text-base">
            <p><strong>🎬 Movie:</strong> {booking?.movie?.title || 'N/A'}</p>
            <p><strong>🏛️ Theater:</strong> {booking?.theater?.name || 'N/A'}</p>
            <p><strong>🪑 Seats:</strong> {booking?.selectedSeats?.join(', ')}</p>
            <p><strong>💰 Amount Paid:</strong> ₹{formatAmount(booking?.totalAmount)}</p>
            <p><strong>📆 Show ID:</strong> {booking?.show || 'N/A'}</p>
          </div>

          <div className="card-actions mt-6">
            <button
              onClick={() => navigate('/')}
              className="btn bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-xl shadow-md"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};






