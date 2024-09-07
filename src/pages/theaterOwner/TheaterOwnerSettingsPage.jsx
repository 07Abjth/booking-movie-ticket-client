import { useState, useEffect } from 'react';
import axios from 'axios';

export const TheaterOwnerSettingsPage = () => {
  const [theaterOwners, setTheaterOwners] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [editingOwner, setEditingOwner] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch theater owners with pagination
  useEffect(() => {
    const fetchTheaterOwners = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/admin/theaterowners?page=${page}&search=${search}`);
        setTheaterOwners(res.data.theaterOwners);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error('Failed to fetch theater owners:', error);
      }
    };

    fetchTheaterOwners();
  }, [page, search]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingOwner
      ? `http://localhost:4000/api/v1/admin/theaterowners/${editingOwner._id}`
      : 'http://localhost:4000/api/v1/admin/theaterowners';
    const method = editingOwner ? 'PUT' : 'POST';

    try {
      const res = await axios({ method, url, data: form });
      const data = res.data;

      if (data.success) {
        if (editingOwner) {
          setTheaterOwners(theaterOwners.map((owner) => (owner._id === data.theaterOwner._id ? data.theaterOwner : owner)));
        } else {
          setTheaterOwners([...theaterOwners, data.theaterOwner]);
        }
        setForm({ name: '', email: '', phone: '' });
        setEditingOwner(null);
      } else {
        console.error('Failed to save theater owner:', data.message);
      }
    } catch (error) {
      console.error('Error saving theater owner:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this theater owner?')) {
      try {
        const res = await axios.delete(`http://localhost:4000/api/v1/admin/theaterowners/${id}`);
        const data = res.data;
        if (data.success) {
          setTheaterOwners(theaterOwners.filter((owner) => owner._id !== id));
        } else {
          console.error('Failed to delete theater owner:', data.message);
        }
      } catch (error) {
        console.error('Error deleting theater owner:', error);
      }
    }
  };

  // Handle edit
  const handleEdit = (owner) => {
    setForm({
      name: owner.name,
      email: owner.email,
      phone: owner.phone,
    });
    setEditingOwner(owner);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Theater Owners</h1>

      {/* Search and pagination */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email"
          className="block mb-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="block mb-2 p-2 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="block mb-2 p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="block mb-2 p-2 border border-gray-300 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingOwner ? 'Update Owner' : 'Add Owner'}
        </button>
      </form>

      {/* Theater owner list */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {theaterOwners.map((owner) => (
            <tr key={owner._id}>
              <td className="py-2">{owner.name}</td>
              <td className="py-2">{owner.email}</td>
              <td className="py-2">{owner.phone}</td>
              <td className="py-2">
                <button onClick={() => handleEdit(owner)} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(owner._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span className="mx-2">{page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};
