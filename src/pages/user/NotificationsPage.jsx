import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config/axiosInstance'; // Import your axios instance
import toast from 'react-hot-toast';

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notifications from the server
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url: '/notifications', // Adjust the endpoint as needed
        method: 'GET',
      });
      setNotifications(response?.data?.data || []);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      toast.error('Failed to load notifications');
      setError('Failed to load notifications. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  if (loading) return <div>Loading notifications...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">Notifications</h1>
      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification._id} className="p-4 border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{notification.title}</h2>
              <p className="mt-2">{notification.message}</p>
              <small className="text-gray-500">{new Date(notification.createdAt).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <div>No notifications available</div>
        )}
      </div>
    </div>
  );
};
