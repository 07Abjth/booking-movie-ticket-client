import { useState } from 'react';
import toast from 'react-hot-toast';

export const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your API call to send support request
      // const response = await axiosInstance.post('/support', formData);

      // Simulate successful response
      setTimeout(() => {
        toast.success('Your support request has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending support request:', error);
      toast.error('Failed to send your support request. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="px-20 py-10">
      <h1 className="font-bold text-4xl mb-5">Support</h1>
      <p className="mb-5">If you need help or have any questions, please fill out the form below, and our support team will get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded p-2 h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </div>
  );
};
